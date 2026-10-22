import {
  listFilesByOwner,
} from "../services/file.service.js";

import { paginationSchema } from "../validators/pagination.validator.js";
// import { resolveStoragePath } from "../utils/storage-path.js";

// import fs from "node:fs/promises";
import { validateFileContent } from "../utils/file-validation.js";
// import path from "node:path";

import {
  findFileByIdAndOwner,
  createFileRecord,
  findFileForDownload,
  findFileForDeletion,
  deleteFileRecord,
  findAccessibleFileById,
} from "../services/file.service.js";

import { randomUUID } from "node:crypto";

import {
  uploadObject,
  getObject,
  deleteObject,
} from "../services/storage.service.js";

export async function listFiles(req, res, next) {
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

    const data = await listFilesByOwner(req.user.id, result.data);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
}

export async function getFile(req, res, next) {
  try {
    const file = await findAccessibleFileById(
      req.params.fileId,
      req.user.id
    );

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: { file },
    });
  } catch (error) {
    next(error);
  }
}

export async function uploadFile(req, res, next) {
  let uploadedKey;

  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select a file to upload",
      });
    }

    const isValid = validateFileContent(
      req.file.buffer,
      req.file.mimetype
    );

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "File content does not match the selected file type",
      });
    }

    const storageKey = randomUUID();

    await uploadObject({
      key: storageKey,
      body: req.file.buffer,
      contentType: req.file.mimetype,
      contentLength: req.file.size,
    });

    uploadedKey = storageKey;

    const file = await createFileRecord({
      originalName: req.file.originalname,
      storageKey,
      mimeType: req.file.mimetype,
      sizeBytes: req.file.size,
      ownerId: req.user.id,
    });

    // The database record was created successfully.
    uploadedKey = undefined;

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      data: { file },
    });
  } catch (error) {
    if (uploadedKey) {
      try {
        await deleteObject(uploadedKey);
      } catch (cleanupError) {
        console.error(
          "Failed to clean up uploaded object:",
          cleanupError
        );
      }
    }

    next(error);
  }
}

// export async function uploadFile(req, res, next) {
//   let uploadedPath;

//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Please select a file to upload",
//       });
//     }

//     uploadedPath = req.file.path;

//     const isValid = await validateFileContent(
//       uploadedPath,
//       req.file.mimetype
//     );

//     if (!isValid) {
//       await fs.unlink(uploadedPath);
//       uploadedPath = undefined;

//       return res.status(400).json({
//         success: false,
//         message: "File content does not match the selected file type",
//       });
//     }

//     const file = await createFileRecord({
//       originalName: req.file.originalname,
//       storageKey: req.file.filename,
//       mimeType: req.file.mimetype,
//       sizeBytes: req.file.size,
//       ownerId: req.user.id,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "File uploaded successfully",
//       data: { file },
//     });
//   } catch (error) {
//     if (uploadedPath) {
//       try {
//         await fs.unlink(uploadedPath);
//       } catch (cleanupError) {
//         console.error("Failed to clean up uploaded file:", cleanupError);
//       }
//     }

//     next(error);
//   }
// }

export async function downloadFile(req, res, next) {
  try {
    const file = await findFileForDownload(
      req.params.fileId,
      req.user.id
    );

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    let object;

    try {
      object = await getObject(file.storageKey);
    } catch (error) {
      if (
        error.name === "NoSuchKey" ||
        error.name === "NotFound"
      ) {
        return res.status(404).json({
          success: false,
          message: "Stored file content not found",
        });
      }

      throw error;
    }

    res.setHeader("Content-Type", file.mimeType);
    res.setHeader("Content-Length", String(file.sizeBytes));
    res.setHeader(
      "Content-Disposition",
      `attachment; filename*=UTF-8''${encodeURIComponent(file.originalName)}`
    );

    object.Body.on("error", (error) => {
      if (!res.headersSent) {
        next(error);
      } else {
        res.destroy(error);
      }
    });

    object.Body.pipe(res);
  } catch (error) {
    next(error);
  }
}

// export async function downloadFile(req, res, next) {
//   try {
//     const file = await findFileForDownload(
//       req.params.fileId,
//       req.user.id
//     );

//     if (!file) {
//       return res.status(404).json({
//         success: false,
//         message: "File not found",
//       });
//     }

//     // Storage keys are generated UUIDs, not user-supplied paths.
//     const storageDirectory = path.resolve("storage");
//     const filePath = resolveStoragePath(file.storageKey);

//     // Ensure the resolved path stays inside the storage directory.
//     if (!filePath) {
//       return res.status(404).json({
//         success: false,
//         message: "File not found",
//       });
//     }

//     try {
//       await fs.access(filePath);
//     } catch {
//       return res.status(404).json({
//         success: false,
//         message: "Stored file content not found",
//       });
//     }

//     res.setHeader("Content-Type", file.mimeType);

//     return res.download(filePath, file.originalName, (error) => {
//       if (error) {
//         if (res.headersSent) {
//           return next(error);
//         }

//         next(error);
//       }
//     });
//   } catch (error) {
//     next(error);
//   }
// }

export async function deleteFile(req, res, next) {
  try {
    const file = await findFileForDeletion(
      req.params.fileId,
      req.user.id
    );

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    // Delete the stored object from Backblaze B2.
    await deleteObject(file.storageKey);

    // Then remove the metadata from PostgreSQL.
    const result = await deleteFileRecord(
      req.params.fileId,
      req.user.id
    );

    if (result.count === 0) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}

// export async function deleteFile(req, res, next) {
//   try {
//     const file = await findFileForDeletion(
//       req.params.fileId,
//       req.user.id
//     );

//     if (!file) {
//       return res.status(404).json({
//         success: false,
//         message: "File not found",
//       });
//     }

//     const storageDirectory = path.resolve("storage");
//     const filePath = resolveStoragePath(file.storageKey);

//     if (!filePath) {
//       return res.status(404).json({
//         success: false,
//         message: "File not found",
//       });
//     }

//     // Remove the physical file first.
//     try {
//       await fs.unlink(filePath);
//     } catch (error) {
//       // A missing physical file shouldn't prevent metadata cleanup.
//       if (error.code !== "ENOENT") {
//         return next(error);
//       }
//     }

//     // Then remove the metadata from PostgreSQL.
//     const result = await deleteFileRecord(
//       req.params.fileId,
//       req.user.id
//     );

//     if (result.count === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "File not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "File deleted successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// }