import multer from "multer";

const allowedMimeTypes = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "text/plain",
]);

function fileFilter(req, file, callback) {
  if (!allowedMimeTypes.has(file.mimetype)) {
    const error = new Error(
      "Unsupported file type. Allowed types: PDF, PNG, JPEG, and TXT."
    );
    error.statusCode = 400;
    return callback(error);
  }

  callback(null, true);
}

export const uploadSingleFile = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },
}).single("file");

// import multer from "multer";
// import path from "node:path";
// import { randomUUID } from "node:crypto";
// import fs from "node:fs";

// const storageDirectory = path.resolve("storage");

// fs.mkdirSync(storageDirectory, { recursive: true });

// const allowedMimeTypes = new Set([
//   "application/pdf",
//   "image/png",
//   "image/jpeg",
//   "text/plain",
// ]);

// const storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, storageDirectory);
//   },

//   filename(req, file, callback) {
//     callback(null, randomUUID());
//   },
// });

// function fileFilter(req, file, callback) {
//   if (!allowedMimeTypes.has(file.mimetype)) {
//     const error = new Error(
//       "Unsupported file type. Allowed types: PDF, PNG, JPEG, and TXT."
//     );
//     error.statusCode = 400;
//     return callback(error);
//   }

//   callback(null, true);
// }

// export const uploadSingleFile = multer({
//   storage,
//   fileFilter,
//   limits: {
//     fileSize: 5 * 1024 * 1024,
//     files: 1,
//   },
// }).single("file");