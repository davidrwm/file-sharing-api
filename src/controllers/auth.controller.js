import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByEmail,
  findUserById,
  verifyUserCredentials,
} from "../services/auth.service.js";
import {
  registerSchema,
  loginSchema,
} from "../validators/auth.validator.js";

import "dotenv/config";

function createAccessToken(user) {
  return jwt.sign(
    { sub: user.id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
}

export async function register(req, res, next) {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid request data",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const email = result.data.email.toLowerCase();
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    const user = await createUser({
      email,
      password: result.data.password,
    });

    const accessToken = createAccessToken(user);

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        user,
        accessToken,
        tokenType: "Bearer",
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await verifyUserCredentials({
      email: result.data.email.toLowerCase(),
      password: result.data.password,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const accessToken = createAccessToken(user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user,
        accessToken,
        tokenType: "Bearer",
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getMe(req, res, next) {
  try {
    const user = await findUserById(req.user.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }

    return res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    next(error);
  }
}