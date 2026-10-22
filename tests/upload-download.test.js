import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import app from "../src/app.js";
import prisma from "../src/config/prisma.js";

describe("File Upload and Download API", () => {
  const uniqueId = randomUUID();
  const email = `upload-test-${uniqueId}@example.com`;
  const password = "TestPassword123!";
  const originalName = `upload-test-${uniqueId}.txt`;
  const fileContents = "This is a test file for the API.";
  const createdFileIds = new Set();
  const recipientEmail = `recipient-${uniqueId}@example.com`;

  let token;
  let userId;
  let recipientToken;
  let recipientUserId;

  beforeAll(async () => {
    const registerResponse = await request(app)
      .post("/api/auth/register")
      .send({ email, password });

    expect(registerResponse.status).toBe(201);

    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send({ email, password });

    expect(loginResponse.status).toBe(200);
    token = loginResponse.body.data.accessToken;

    const meResponse = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${token}`);

    expect(meResponse.status).toBe(200);
    userId = meResponse.body.data.user.id;

    const recipientRegister = await request(app)
      .post("/api/auth/register")
      .send({
        email: recipientEmail,
        password,
      });

    expect(recipientRegister.status).toBe(201);

    const recipientLogin = await request(app)
      .post("/api/auth/login")
      .send({
        email: recipientEmail,
        password,
      });

    expect(recipientLogin.status).toBe(200);
    recipientToken = recipientLogin.body.data.accessToken;

    const recipientMe = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${recipientToken}`);

    expect(recipientMe.status).toBe(200);
    recipientUserId = recipientMe.body.data.user.id;
  });

  afterAll(async () => {
    const ids = [...createdFileIds];

    if (ids.length > 0) {
      const files = await prisma.storedFile.findMany({
        where: {
          id: { in: ids },
          ownerId: userId,
        },
        select: {
          id: true,
          storageKey: true,
        },
      });

      for (const file of files) {
        const filePath = path.resolve("storage", file.storageKey);

        try {
          await fs.unlink(filePath);
        } catch (error) {
          if (error.code !== "ENOENT") {
            throw error;
          }
        }
      }

      await prisma.storedFile.deleteMany({
        where: {
          id: { in: ids },
          ownerId: userId,
        },
      });
    }

    if (userId || recipientUserId) {
      await prisma.user.deleteMany({
        where: {
          id: {
            in: [userId, recipientUserId].filter(Boolean),
          },
        },
      });
    }
  });

  it("should upload a valid text file and save its metadata", async () => {
    const response = await request(app)
      .post("/api/files")
      .set("Authorization", `Bearer ${token}`)
      .attach("file", Buffer.from(fileContents), {
        filename: originalName,
        contentType: "text/plain",
      });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      success: true,
      message: "File uploaded successfully",
      data: {
        file: {
          id: expect.any(String),
          originalName,
          mimeType: "text/plain",
          sizeBytes: Buffer.byteLength(fileContents),
        },
      },
    });

    createdFileIds.add(response.body.data.file.id);

    const savedFile = await prisma.storedFile.findUnique({
      where: { id: response.body.data.file.id },
    });

    expect(savedFile).not.toBeNull();
    expect(savedFile.ownerId).toBe(userId);
    expect(savedFile.originalName).toBe(originalName);
  });

  it("should download an uploaded file with its original contents", async () => {
    // Upload a fresh file so this test is independent of test execution order.
    const uploadResponse = await request(app)
      .post("/api/files")
      .set("Authorization", `Bearer ${token}`)
      .attach("file", Buffer.from(fileContents), {
        filename: originalName,
        contentType: "text/plain",
      });

    expect(uploadResponse.status).toBe(201);

    createdFileIds.add(uploadResponse.body.data.file.id);

    const fileId = uploadResponse.body.data.file.id;

    const downloadResponse = await request(app)
      .get(`/api/files/${fileId}/download`)
      .set("Authorization", `Bearer ${token}`);

    expect(downloadResponse.status).toBe(200);
    expect(downloadResponse.text).toBe(fileContents);
    expect(downloadResponse.headers["content-type"]).toContain(
      "text/plain"
    );
    expect(downloadResponse.headers["content-disposition"]).toContain(
      originalName
    );
  });

  it("should reject an unsupported file type", async () => {
    const response = await request(app)
      .post("/api/files")
      .set("Authorization", `Bearer ${token}`)
      .attach("file", Buffer.from("not an allowed file type"), {
        filename: "test.zip",
        contentType: "application/zip",
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain("Unsupported file type");
  });

  it("should reject a file larger than 5 MB", async () => {
    const oversizedBuffer = Buffer.alloc(5 * 1024 * 1024 + 1, "a");

    const response = await request(app)
      .post("/api/files")
      .set("Authorization", `Bearer ${token}`)
      .attach("file", oversizedBuffer, {
        filename: "oversized.txt",
        contentType: "text/plain",
      });

    expect(response.status).toBe(413);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe(
      "File size exceeds the 5 MB limit"
    );
  });

  it("should reject an upload request without a file", async () => {
    const response = await request(app)
      .post("/api/files")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Please select a file to upload");
  });

  it("should reject a download request without authentication", async () => {
    const response = await request(app)
      .get("/api/files/nonexistent-file-id/download");

    expect(response.status).toBe(401);
  });

  it("should allow a recipient to download a file shared with them", async () => {
    // 1. The owner uploads a real file.
    const uploadResponse = await request(app)
      .post("/api/files")
      .set("Authorization", `Bearer ${token}`)
      .attach("file", Buffer.from(fileContents), {
        filename: originalName,
        contentType: "text/plain",
      });

    expect(uploadResponse.status).toBe(201);

    const fileId = uploadResponse.body.data.file.id;
    createdFileIds.add(fileId);

    // 2. The owner shares the file with the recipient.
    const shareResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${token}`)
      .send({ email: recipientEmail });

    expect(shareResponse.status).toBe(201);

    // 3. The recipient downloads the shared file.
    const downloadResponse = await request(app)
      .get(`/api/files/${fileId}/download`)
      .set("Authorization", `Bearer ${recipientToken}`);

    expect(downloadResponse.status).toBe(200);
    expect(downloadResponse.text).toBe(fileContents);
    expect(downloadResponse.headers["content-type"]).toContain(
      "text/plain"
    );
  });

  it("should deny downloads after the owner revokes a share", async () => {
    // Owner uploads a file
    const uploadResponse = await request(app)
      .post("/api/files")
      .set("Authorization", `Bearer ${token}`)
      .attach("file", Buffer.from(fileContents), {
        filename: originalName,
        contentType: "text/plain",
      });

    expect(uploadResponse.status).toBe(201);

    const fileId = uploadResponse.body.data.file.id;
    createdFileIds.add(fileId);

    // Owner shares the file with the recipient
    const shareResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${token}`)
      .send({ email: recipientEmail });

    expect(shareResponse.status).toBe(201);

    const shareId = shareResponse.body.data.share.id;

    // Verify the recipient can download before revocation
    const beforeRevoke = await request(app)
      .get(`/api/files/${fileId}/download`)
      .set("Authorization", `Bearer ${recipientToken}`);

    expect(beforeRevoke.status).toBe(200);
    expect(beforeRevoke.text).toBe(fileContents);

    // Owner revokes the share
    const revokeResponse = await request(app)
      .delete(`/api/files/shares/${shareId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(revokeResponse.status).toBe(200);

    // Recipient should no longer be able to download
    const afterRevoke = await request(app)
      .get(`/api/files/${fileId}/download`)
      .set("Authorization", `Bearer ${recipientToken}`);

    expect(afterRevoke.status).toBe(404);
  });
});