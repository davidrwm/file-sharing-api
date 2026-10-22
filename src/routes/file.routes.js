import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";

import { uploadSingleFile } from "../middleware/upload.middleware.js";

import {
  uploadFile,
  downloadFile,
  deleteFile,
  listFiles,
  getFile
} from "../controllers/file.controller.js";

import {
  shareFile,
  getFileShares,
  getSharedFiles,
  revokeFileShare,
} from "../controllers/share.controller.js";

const router = Router();

router.use(authenticate);

/**
 * @swagger
 * /api/files:
 *   get:
 *     summary: List files owned by the current user
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 10
 *     responses:
 *       200:
 *         description: Files retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileListResponse'
 *       400:
 *         description: Invalid pagination parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Authentication required
 *       500:
 *         description: Internal server error
 */
router.get("/", listFiles);

/**
 * @swagger
 * /api/files:
 *   post:
 *     summary: Upload a file
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Allowed file types, maximum size 5 MB
 *     responses:
 *       201:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UploadFileResponse'
 *       400:
 *         description: Missing file or unsupported file type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Authentication required
 *       413:
 *         description: File exceeds the size limit
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.post("/", uploadSingleFile, uploadFile);

/**
 * @swagger
 * /api/files/shared-with-me:
 *   get:
 *     summary: List files shared with the current user
 *     description: Returns files that other users have shared with the authenticated user.
 *     tags: [File Sharing]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number, starting at 1
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: Shared files retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SharedFilesResponse'
 *       401:
 *         description: Authentication required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.get("/shared-with-me", getSharedFiles);

/**
 * @swagger
 * /api/files/shares/{shareId}:
 *   delete:
 *     summary: Revoke access to a shared file
 *     description: Revokes a share belonging to a file owned by the authenticated user.
 *     tags: [File Sharing]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: shareId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the share to revoke
 *     responses:
 *       200:
 *         description: File sharing access revoked successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RevokeShareResponse'
 *       401:
 *         description: Authentication required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Share not found or not owned by the current user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.delete("/shares/:shareId", revokeFileShare);

/**
 * @swagger
 * /api/files/{fileId}/download:
 *   get:
 *     summary: Download a file
 *     description: The owner and authorized recipients can download the file.
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: fileId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the file
 *     responses:
 *       200:
 *         description: File contents returned as a download
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       401:
 *         description: Authentication required
 *       404:
 *         description: File or stored file content not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.get("/:fileId/download", downloadFile);

/**
 * @swagger
 * /api/files/{fileId}/shares:
 *   post:
 *     summary: Share a file with another registered user
 *     description: Only the file owner can share a file. Sharing with yourself is not allowed.
 *     tags: [File Sharing]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: fileId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the file to share
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateShareRequest'
 *     responses:
 *       201:
 *         description: File shared successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShareResponse'
 *       400:
 *         description: Invalid recipient email or sharing with yourself is not allowed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Authentication required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: File or recipient account not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       409:
 *         description: File has already been shared with this user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.post("/:fileId/shares", shareFile);

/**
 * @swagger
 * /api/files/{fileId}/shares:
 *   get:
 *     summary: List users a file has been shared with
 *     description: Only the file owner can list shares for their file.
 *     tags: [File Sharing]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: fileId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the file
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number, starting at 1
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: Shares retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShareListResponse'
 *       401:
 *         description: Authentication required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: File not found or not owned by the current user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.get("/:fileId/shares", getFileShares);

/**
 * @swagger
 * /api/files/{fileId}:
 *   get:
 *     summary: Get file metadata
 *     description: The file must belong to the current user or be shared with them.
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: fileId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the file
 *     responses:
 *       200:
 *         description: File metadata retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileResponse'
 *       401:
 *         description: Authentication required
 *       404:
 *         description: File not found or inaccessible
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.get("/:fileId", getFile);

/**
 * @swagger
 * /api/files/{fileId}:
 *   delete:
 *     summary: Delete an owned file
 *     description: Only the file owner can delete the file.
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: fileId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the file
 *     responses:
 *       200:
 *         description: File deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeleteFileResponse'
 *       401:
 *         description: Authentication required
 *       404:
 *         description: File not found or not owned by the current user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.delete("/:fileId", deleteFile);

export default router;