import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import { randomUUID } from "node:crypto";
import app from "../src/app.js";
import prisma from "../src/config/prisma.js";

describe("File Sharing API", () => {
  const uniqueId = randomUUID();

  const owner = {
    email: `owner-${uniqueId}@example.com`,
    password: "TestPassword123!",
  };

  const recipient = {
    email: `recipient-${uniqueId}@example.com`,
    password: "TestPassword123!",
  };

  const otherUser = {
    email: `other-${uniqueId}@example.com`,
    password: "TestPassword123!",
  };

  let ownerToken;
  let recipientId;
  let recipientToken;
  let otherUserToken;
  let ownerId;
  let fileId;
  let storageKey;

  async function registerAndLogin(user) {
    const registerResponse = await request(app)
      .post("/api/auth/register")
      .send(user);

    expect(registerResponse.status).toBe(201);

    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send(user);

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body.data.accessToken).toBeTruthy();

    return loginResponse.body.data.accessToken;
  }

  beforeAll(async () => {
    ownerToken = await registerAndLogin(owner);
    recipientToken = await registerAndLogin(recipient);
    otherUserToken = await registerAndLogin(otherUser);

    const meResponse = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(meResponse.status).toBe(200);
    ownerId = meResponse.body.data.user.id;

    const recipientMeResponse = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${recipientToken}`);
    
    recipientId = recipientMeResponse.body.data.user.id;

    storageKey = `test-${uniqueId}`;

    const file = await prisma.storedFile.create({
      data: {
        originalName: "shared-test.txt",
        storageKey,
        mimeType: "text/plain",
        sizeBytes: 12,
        ownerId,
      },
    });

    fileId = file.id;
  });

  afterAll(async () => {
    if (fileId) {
      await prisma.storedFile.deleteMany({
        where: { id: fileId },
      });
    }

    await prisma.user.deleteMany({
      where: {
        email: {
          in: [owner.email, recipient.email, otherUser.email],
        },
      },
    });
  });

  it("should share a file, allow access, and revoke access", async () => {
    // 1. Share the file with the recipient.
    const shareResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${ownerToken}`)
      .send({ email: recipient.email });

    expect(shareResponse.status).toBe(201);
    expect(shareResponse.body).toMatchObject({
      success: true,
      message: "File shared successfully",
      data: {
        share: {
          id: expect.any(String),
        },
      },
    });

    const shareId = shareResponse.body.data.share.id;

    // 2. Reject sharing the same file with the same recipient again.
    const duplicateResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${ownerToken}`)
      .send({ email: recipient.email });

    expect(duplicateResponse.status).toBe(409);
    expect(duplicateResponse.body.message).toBe(
      "This file has already been shared with that user"
    );

    // 3. The owner can list shares for their file.
    const listSharesResponse = await request(app)
      .get(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(listSharesResponse.status).toBe(200);
    expect(listSharesResponse.body.success).toBe(true);
    // expect(listSharesResponse.body.data.shares).toHaveLength(1);

    // 4. A different user cannot list shares for someone else's file.
    const unauthorizedListResponse = await request(app)
      .get(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${otherUserToken}`);

    expect(unauthorizedListResponse.status).toBe(404);

    // 5. The recipient can see the shared file in their shared-files list.
    const sharedFilesResponse = await request(app)
      .get("/api/files/shared-with-me")
      .set("Authorization", `Bearer ${recipientToken}`);

    console.log(sharedFilesResponse.body.data);

    expect(sharedFilesResponse.status).toBe(200);
    expect(sharedFilesResponse.body.success).toBe(true);
    expect(sharedFilesResponse.body.data.files).toHaveLength(1);

    // 6. The recipient can access the file's metadata.
    const accessibleFileResponse = await request(app)
      .get(`/api/files/${fileId}`)
      .set("Authorization", `Bearer ${recipientToken}`);

    expect(accessibleFileResponse.status).toBe(200);
    expect(accessibleFileResponse.body).toMatchObject({
      success: true,
      data: {
        file: {
          id: fileId,
          originalName: "shared-test.txt",
        },
      },
    });

    // 7. A recipient may access a shared file but cannot delete it.
    const recipientDeleteResponse = await request(app)
      .delete(`/api/files/${fileId}`)
      .set("Authorization", `Bearer ${recipientToken}`);

    expect(recipientDeleteResponse.status).toBe(404);

    // The original file record must still exist.
    const remainingFile = await prisma.storedFile.findUnique({
      where: { id: fileId },
    });

    expect(remainingFile).not.toBeNull();

    // 8. A user without a share cannot access the file.
    const inaccessibleFileResponse = await request(app)
      .get(`/api/files/${fileId}`)
      .set("Authorization", `Bearer ${otherUserToken}`);

    expect(inaccessibleFileResponse.status).toBe(404);

    // 9. Another user cannot revoke the share
    const unauthorizedRevokeResponse = await request(app)
      .delete(`/api/files/shares/${shareId}`)
      .set("Authorization", `Bearer ${otherUserToken}`);

    expect(unauthorizedRevokeResponse.status).toBe(404);

    // Confirm the share still exists.
    const remainingShare = await prisma.fileShare.findUnique({
      where: { id: shareId },
    });

    expect(remainingShare).not.toBeNull();

    // 10. Revoke the recipient's access.
    const revokeResponse = await request(app)
      .delete(`/api/files/shares/${shareId}`)
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(revokeResponse.status).toBe(200);
    expect(revokeResponse.body).toMatchObject({
      success: true,
      message: "File sharing access revoked successfully",
    });

    // 11. The recipient can no longer access the file.
    const revokedAccessResponse = await request(app)
      .get(`/api/files/${fileId}`)
      .set("Authorization", `Bearer ${recipientToken}`);

    expect(revokedAccessResponse.status).toBe(404);

    // 12. Revoking the same share again should return 404.
    const secondRevokeResponse = await request(app)
      .delete(`/api/files/shares/${shareId}`)
      .set("Authorization", `Bearer ${ownerToken}`);

    expect(secondRevokeResponse.status).toBe(404);
    expect(secondRevokeResponse.body.message).toBe("Share not found");
  });

  it("should reject invalid sharing requests", async () => {
    // Invalid email.
    const invalidEmailResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${ownerToken}`)
      .send({ email: "not-an-email" });

    expect(invalidEmailResponse.status).toBe(400);
    expect(invalidEmailResponse.body.message).toBe(
      "Invalid recipient email"
    );

    // Recipient account does not exist.
    const missingRecipientResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${ownerToken}`)
      .send({ email: `missing-${uniqueId}@example.com` });

    expect(missingRecipientResponse.status).toBe(404);
    expect(missingRecipientResponse.body.message).toBe(
      "Recipient account not found"
    );

    // Cannot share a file with yourself.
    const selfShareResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${ownerToken}`)
      .send({ email: owner.email });

    expect(selfShareResponse.status).toBe(400);
    expect(selfShareResponse.body.message).toBe(
      "You cannot share a file with yourself"
    );

    // A non-owner cannot share someone else's file.
    const nonOwnerResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${otherUserToken}`)
      .send({ email: recipient.email });

    expect(nonOwnerResponse.status).toBe(404);
    expect(nonOwnerResponse.body.message).toBe("File not found");
  });

  it("should prevent a recipient from deleting a shared file", async () => {
    // Owner shares the file with the recipient
    const shareResponse = await request(app)
      .post(`/api/files/${fileId}/shares`)
      .set("Authorization", `Bearer ${ownerToken}`)
      .send({ email: recipient.email });

    expect(shareResponse.status).toBe(201);

    // Recipient attempts to delete the owner's file
    const deleteResponse = await request(app)
      .delete(`/api/files/${fileId}`)
      .set("Authorization", `Bearer ${recipientToken}`);

    // The recipient must not be allowed to delete it
    expect([403, 404]).toContain(deleteResponse.status);

    // Confirm the original file record still exists
    const file = await prisma.storedFile.findUnique({
      where: { id: fileId },
    });

    expect(file).not.toBeNull();
    expect(file.ownerId).toBe(ownerId);
  });
});