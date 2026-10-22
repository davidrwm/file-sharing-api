import express from "express";
import cors from "cors";
import helmet from "helmet";
import prisma from "./config/prisma.js";
import multer from "multer";

import authRoutes from "./routes/auth.routes.js";
import fileRoutes from "./routes/file.routes.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "File Storage API is running",
  });
});

app.get("/api/health/db", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      success: true,
      message: "Database connection successful",
    });
  } catch (error) {
    console.error("Database health check failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  // Handle Multer upload errors.
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(413).json({
        success: false,
        message: "File size exceeds the 5 MB limit",
      });
    }

    if (
      err.code === "LIMIT_FILE_COUNT" ||
      err.code === "LIMIT_UNEXPECTED_FILE"
    ) {
      return res.status(400).json({
        success: false,
        message: "Only one file may be uploaded at a time",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid file upload",
    });
  }

  // Handle custom errors from the upload file filter.
  if (err.statusCode === 400) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  // Log unexpected errors on the server, not in the API response.
  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

export default app;