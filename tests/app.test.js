import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("API health check", () => {
  it("should return a successful response", async () => {
    const response = await request(app)
      .get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      message: "File Storage API is running",
    });
  });
});

describe("File API authentication", () => {
  it("should reject requests without an access token", async () => {
    const response = await request(app)
      .get("/api/files");

    expect(response.status).toBe(401);
  });

  it("should reject file uploads without an access token", async () => {
    const response = await request(app)
      .post("/api/files");

    expect(response.status).toBe(401);
  });
});