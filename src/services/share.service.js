import prisma from "../config/prisma.js";

export async function findOwnedFile(fileId, ownerId) {
  return prisma.storedFile.findFirst({
    where: {
      id: fileId,
      ownerId,
    },
    select: {
      id: true,
      originalName: true,
    },
  });
}

export async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
    },
  });
}

export async function createFileShare(fileId, recipientId) {
  return prisma.fileShare.create({
    data: {
      fileId,
      recipientId,
    },
    select: {
      id: true,
      fileId: true,
      recipientId: true,
      createdAt: true,
      recipient: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
}

export async function listSharesForFile(
  fileId,
  ownerId,
  { page = 1, limit = 10 } = {}
) {
  const skip = (page - 1) * limit;

  const where = {
    fileId,
    file: { ownerId },
  };

  const [shares, total] = await prisma.$transaction([
    prisma.fileShare.findMany({
      where,
      select: {
        id: true,
        createdAt: true,
        recipient: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.fileShare.count({ where }),
  ]);

  return {
    shares,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function listFilesSharedWithUser(
  recipientId,
  { page = 1, limit = 10 } = {}
) {
  const skip = (page - 1) * limit;

  const where = { recipientId };

  const [files, total] = await prisma.$transaction([
    prisma.fileShare.findMany({
      where,
      select: {
        id: true,
        createdAt: true,
        file: {
          select: {
            id: true,
            originalName: true,
            mimeType: true,
            sizeBytes: true,
            createdAt: true,
            owner: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.fileShare.count({ where }),
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

export async function deleteFileShare(shareId, ownerId) {
  return prisma.fileShare.deleteMany({
    where: {
      id: shareId,
      file: { ownerId },
    },
  });
}

export async function findShareForUser(fileId, recipientId) {
  return prisma.fileShare.findFirst({
    where: {
      fileId,
      recipientId,
    },
    select: {
      id: true,
      file: {
        select: {
          id: true,
          originalName: true,
          storageKey: true,
          mimeType: true,
          sizeBytes: true,
          ownerId: true,
        },
      },
    },
  });
}