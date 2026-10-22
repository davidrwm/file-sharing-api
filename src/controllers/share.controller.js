import {
  findOwnedFile,
  findUserByEmail,
  createFileShare,
  listSharesForFile,
  listFilesSharedWithUser,
  deleteFileShare,
} from "../services/share.service.js";

import { createShareSchema } from "../validators/share.validator.js";

import { paginationSchema } from "../validators/pagination.validator.js";

export async function shareFile(req, res, next) {
  try {
    const result = createShareSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid recipient email",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const file = await findOwnedFile(
      req.params.fileId,
      req.user.id
    );

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    const recipient = await findUserByEmail(
      result.data.email.toLowerCase()
    );

    if (!recipient) {
      return res.status(404).json({
        success: false,
        message: "Recipient account not found",
      });
    }

    if (recipient.id === req.user.id) {
      return res.status(400).json({
        success: false,
        message: "You cannot share a file with yourself",
      });
    }

    const share = await createFileShare(file.id, recipient.id);

    return res.status(201).json({
      success: true,
      message: "File shared successfully",
      data: { share },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "This file has already been shared with that user",
      });
    }

    next(error);
  }
}

export async function getFileShares(req, res, next) {
  try {
    const result = paginationSchema.safeParse(req.query);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid pagination parameters",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const file = await findOwnedFile(
      req.params.fileId,
      req.user.id
    );

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    const shares = await listSharesForFile(
      file.id,
      req.user.id,
      result.data
    );

    return res.status(200).json({
      success: true,
      data: shares,
    });
  } catch (error) {
    next(error);
  }
}

export async function getSharedFiles(req, res, next) {
  try {
    const result = paginationSchema.safeParse(req.query);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid pagination parameters",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const shares = await listFilesSharedWithUser(req.user.id, result.data);

    return res.status(200).json({
      success: true,
      data: shares,
    });
  } catch (error) {
    next(error);
  }
}

export async function revokeFileShare(req, res, next) {
  try {
    const result = await deleteFileShare(
      req.params.shareId,
      req.user.id
    );

    if (result.count === 0) {
      return res.status(404).json({
        success: false,
        message: "Share not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "File sharing access revoked successfully",
    });
  } catch (error) {
    next(error);
  }
}