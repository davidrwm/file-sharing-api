import prisma from "../config/prisma.js";

export async function listFilesByOwner(ownerId, { page = 1, limit = 10 } = {}) {
  const skip = (page - 1) * limit;

  const [files, total] = await prisma.$transaction([
    prisma.storedFile.findMany({
      where: { ownerId },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      select: {
        id: true,
        originalName: true,
        mimeType: true,
        sizeBytes: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.storedFile.count({
      where: { ownerId },
    }),
  ]);

  return {
    files,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function findFileByIdAndOwner(fileId, ownerId) {
  return prisma.storedFile.findFirst({
    where: {
      id: fileId,
      ownerId,
    },
    select: {
      id: true,
      originalName: true,
      mimeType: true,
      sizeBytes: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function createFileRecord({
  originalName,
  storageKey,
  mimeType,
  sizeBytes,
  ownerId,
}) {
  return prisma.storedFile.create({
    data: {
      originalName,
      storageKey,
      mimeType,
      sizeBytes,
      ownerId,
    },
    select: {
      id: true,
      originalName: true,
      mimeType: true,
      sizeBytes: true,
      createdAt: true,
    },
  });
}

export async function findFileForDownload(fileId, userId) {
  return prisma.storedFile.findFirst({
    where: {
      id: fileId,
      OR: [
        { ownerId: userId },
        {
          shares: {
            some: { recipientId: userId },
          },
        },
      ],
    },
    select: {
      id: true,
      originalName: true,
      storageKey: true,
      mimeType: true,
      sizeBytes: true,
    },
  });
}

export async function findFileForDeletion(fileId, ownerId) {
  return prisma.storedFile.findFirst({
    where: {
      id: fileId,
      ownerId,
    },
    select: {
      id: true,
      storageKey: true,
    },
  });
}

export async function deleteFileRecord(fileId, ownerId) {
  return prisma.storedFile.deleteMany({
    where: {
      id: fileId,
      ownerId,
    },
  });
}

export async function findAccessibleFileById(fileId, userId) {
  return prisma.storedFile.findFirst({
    where: {
      id: fileId,
      OR: [
        { ownerId: userId },
        {
          shares: {
            some: { recipientId: userId },
          },
        },
      ],
    },
    select: {
      id: true,
      originalName: true,
      mimeType: true,
      sizeBytes: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}