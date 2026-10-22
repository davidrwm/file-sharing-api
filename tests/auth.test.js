import { describe, it, expect } from "vitest";
import request from "supertest";

import app from "../src/app.js";

describe("Authentication API", () => {
  const email = `test-${Date.now()}@example.com`;
  const password = "TestPassword123!";

  it("should register a new user and allow them to log in", async () => {
    // Register a new user
    const registerResponse = await request(app)
      .post("/api/auth/register")
      .send({
        email,
        password,
      });

    expect(registerResponse.status).toBe(201);
    expect(registerResponse.body.success).toBe(true);
    expect(registerResponse.body.message).toBe("Registration successful");
    expect(registerResponse.body.data.user.email).toBe(email);

    // Log in using the new user's credentials
    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send({
        email,
        password,
      });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body.success).toBe(true);
    expect(loginResponse.body.message).toBe("Login successful");
    expect(loginResponse.body.data.accessToken).toBeTruthy();
  });

  it("should reject login with an incorrect password", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: `unknown-${Date.now()}@example.com`,
        password: "WrongPassword123!",
      });

    expect(response.status).toBe(401);
  });
});