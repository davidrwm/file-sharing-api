import { describe, it, expect, afterAll } from "vitest";
import request from "supertest";
import { randomUUID } from "node:crypto";

import app from "../src/app.js";
import prisma from "../src/config/prisma.js";

describe("File ownership and permissions", () => {
  let ownerToken;
  let otherUserToken;
  let fileId;
  let storageKey;
  let ownerId;

  const ownerEmail = `owner-${randomUUID()}@example.com`;
  const otherEmail = `other-${randomUUID()}@example.com`;
  const password = "TestPassword123!";

  it("should prevent another user from accessing a private file", async () => {
    // Register the file owner
    const ownerRegister = await request(app)
      .post("/api/auth/register")
      .send({ email: ownerEmail, password });

    expect(ownerRegister.status).toBe(201);

    // Log in as the owner
    const ownerLogin = await request(app)
      .post("/api/auth/login")
      .send({ email: ownerEmail, password });

    expect(ownerLogin.status).toBe(200);
    ownerToken = ownerLogin.body.data.accessToken;

    // Register and log in as a different user
    const otherRegister = await request(app)
      .post("/api/auth/register")
      .send({ email: otherEmail, password });

    expect(otherRegister.status).toBe(201);

    const otherLogin = await request(app)
      .post("/api/auth/login")
      .send({ email: otherEmail, password });

    expect(otherLogin.status).toBe(200);
    otherUserToken = otherLogin.body.data.accessToken;

    // Get the owner's database ID from the authenticated endpoint
    const meResponse = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(meResponse.status).toBe(200);
    ownerId = meResponse.body.data.user.id;

    // Create a metadata record in the test database.
    // No physical file is created.
    storageKey = `test-${randomUUID()}`;

    const file = await prisma.storedFile.create({
      data: {
        originalName: "private-test.txt",
        storageKey,
        mimeType: "text/plain",
        sizeBytes: 12,
        ownerId,
      },
    });

    fileId = file.id;

    // The owner can view the file metadata
    const ownerView = await request(app)
      .get(`/api/files/${fileId}`)
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(ownerView.status).toBe(200);

    // Another user cannot view the file
    const otherView = await request(app)
      .get(`/api/files/${fileId}`)
      .set("Authorization", `Bearer ${otherUserToken}`);

    expect(otherView.status).toBe(404);

    // Verify file-list isolation
    const otherFilesResponse = await request(app)
      .get("/api/files")
      .set("Authorization", `Bearer ${otherUserToken}`);

    expect(otherFilesResponse.status).toBe(200);

    const otherFiles = otherFilesResponse.body.data.files;

    expect(
      otherFiles.some((file) => file.id === fileId)
    ).toBe(false);

    // Another user cannot download the file
    const otherDownload = await request(app)
      .get(`/api/files/${fileId}/download`)
      .set("Authorization", `Bearer ${otherUserToken}`);

    expect(otherDownload.status).toBe(404);

    // Another user cannot delete the file
    const otherDelete = await request(app)
      .delete(`/api/files/${fileId}`)
      .set("Authorization", `Bearer ${otherUserToken}`);

    expect([403, 404]).toContain(otherDelete.status);

    // Confirm the file record still exists
    const remainingFile = await prisma.storedFile.findUnique({
      where: { id: fileId },
    });

    expect(remainingFile).not.toBeNull();
  });

  afterAll(async () => {
    if (fileId) {
      await prisma.storedFile.deleteMany({
        where: {
          id: fileId,
          storageKey,
          ownerId,
        },
      });
    }
  });
});