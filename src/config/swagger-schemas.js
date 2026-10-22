const swaggerSchemas = {
  User: {
    type: "object",
    properties: {
      id: {
        type: "string",
        example: "cm123abc456",
      },
      email: {
        type: "string",
        format: "email",
        example: "user@example.com",
      },
    },
  },

  RegisterRequest: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        format: "email",
        example: "user@example.com",
      },
      password: {
        type: "string",
        format: "password",
        example: "SecurePassword123!",
      },
    },
  },

  LoginRequest: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        format: "email",
        example: "user@example.com",
      },
      password: {
        type: "string",
        format: "password",
        example: "SecurePassword123!",
      },
    },
  },

  AuthResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      message: {
        type: "string",
        example: "Login successful",
      },
      data: {
        type: "object",
        properties: {
          user: {
            $ref: "#/components/schemas/User",
          },
          accessToken: {
            type: "string",
            description: "JWT access token",
          },
          tokenType: {
            type: "string",
            example: "Bearer",
          },
          expiresIn: {
            type: "integer",
            description: "Token lifetime in seconds",
            example: 900,
          },
        },
        required: ["user", "accessToken", "tokenType", "expiresIn"],
      },
    },
    required: ["success", "message", "data"],
  },

  CurrentUserResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        type: "object",
        properties: {
          user: {
            $ref: "#/components/schemas/User",
          },
        },
        required: ["user"],
      },
    },
    required: ["success", "data"],
  },

  File: {
    type: "object",
    properties: {
      id: {
        type: "string",
        example: "cm123file456",
      },
      originalName: {
        type: "string",
        example: "report.pdf",
      },
      mimeType: {
        type: "string",
        example: "application/pdf",
      },
      sizeBytes: {
        type: "integer",
        example: 102400,
      },
      createdAt: {
        type: "string",
        format: "date-time",
      },
    },
  },

  Pagination: {
    type: "object",
    properties: {
      page: {
        type: "integer",
        example: 1,
      },
      limit: {
        type: "integer",
        example: 10,
      },
      total: {
        type: "integer",
        example: 25,
      },
      totalPages: {
        type: "integer",
        example: 3,
      },
    },
  },

  ErrorResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },
      message: {
        type: "string",
        example: "Invalid request data",
      },
      errors: {
        type: "array",
        description: "Present when the request contains validation errors",
        items: {
          type: "object",
          properties: {
            field: {
              type: "string",
              example: "email",
            },
            message: {
              type: "string",
              example: "Invalid email",
            },
          },
        },
      },
    },
    required: ["success", "message"],
  },

  Share: {
    type: "object",
    required: ["id", "fileId", "recipientId", "createdAt"],
    properties: {
      id: {
        type: "string",
        example: "cm123share456",
      },
      fileId: {
        type: "string",
        example: "cm123file456",
      },
      recipientId: {
        type: "string",
        example: "cm123user789",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-10-19T08:30:00.000Z",
      },
      recipient: {
        $ref: "#/components/schemas/ShareUser",
      },
    },
  },

  ShareUser: {
    type: "object",
    required: ["id", "email"],
    properties: {
      id: {
        type: "string",
        example: "cm123user789",
      },
      email: {
        type: "string",
        format: "email",
        example: "recipient@example.com",
      },
    },
  },

  FileShareListItem: {
    type: "object",
    required: ["id", "createdAt", "recipient"],
    properties: {
      id: {
        type: "string",
        example: "cm123share456",
      },
      createdAt: {
        type: "string",
        format: "date-time",
      },
      recipient: {
        $ref: "#/components/schemas/ShareUser",
      },
    },
  },

  SharedFileOwner: {
    type: "object",
    required: ["id", "email"],
    properties: {
      id: {
        type: "string",
        example: "cm123owner456",
      },
      email: {
        type: "string",
        format: "email",
        example: "owner@example.com",
      },
    },
  },

  SharedFileDetails: {
    type: "object",
    required: [
      "id",
      "originalName",
      "mimeType",
      "sizeBytes",
      "createdAt",
      "owner",
    ],
    properties: {
      id: {
        type: "string",
        example: "cm123file456",
      },
      originalName: {
        type: "string",
        example: "report.pdf",
      },
      mimeType: {
        type: "string",
        example: "application/pdf",
      },
      sizeBytes: {
        type: "integer",
        example: 102400,
      },
      createdAt: {
        type: "string",
        format: "date-time",
      },
      owner: {
        $ref: "#/components/schemas/SharedFileOwner",
      },
    },
  },

  SharedWithMeItem: {
    type: "object",
    required: ["id", "createdAt", "file"],
    properties: {
      id: {
        type: "string",
        example: "cm123share456",
      },
      createdAt: {
        type: "string",
        format: "date-time",
      },
      file: {
        $ref: "#/components/schemas/SharedFileDetails",
      },
    },
  },

  FileResponse: {
    type: "object",
    required: ["success", "data"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        type: "object",
        required: ["file"],
        properties: {
          file: {
            $ref: "#/components/schemas/File",
          },
        },
      },
    },
  },

  UploadFileResponse: {
    type: "object",
    required: ["success", "message", "data"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      message: {
        type: "string",
        example: "File uploaded successfully",
      },
      data: {
        type: "object",
        properties: {
          file: {
            $ref: "#/components/schemas/File",
          },
        },
        required: ["file"],
      },
    },
  },

  FileListResponse: {
    type: "object",
    required: ["success", "data"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        type: "object",
        properties: {
          files: {
            type: "array",
            items: {
              $ref: "#/components/schemas/File",
            },
          },
          pagination: {
            $ref: "#/components/schemas/Pagination",
          },
        },
        required: ["files", "pagination"],
      },
    },
  },

  DeleteFileResponse: {
    type: "object",
    required: ["success", "message"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      message: {
        type: "string",
        example: "File deleted successfully",
      },
    },
  },

  ShareResponse: {
    type: "object",
    required: ["success", "message", "data"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      message: {
        type: "string",
        example: "File shared successfully",
      },
      data: {
        type: "object",
        required: ["share"],
        properties: {
          share: {
            $ref: "#/components/schemas/Share",
          },
        },
      },
    },
  },

  ShareListResponse: {
    type: "object",
    required: ["success", "data"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        type: "object",
        required: ["shares"],
        properties: {
          shares: {
            type: "array",
            items: {
              $ref: "#/components/schemas/FileShareListItem",
            },
          },
          pagination: {
            $ref: "#/components/schemas/Pagination",
          },
        },
      },
    },
  },

  SharedFilesResponse: {
    type: "object",
    required: ["success", "data"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      data: {
        type: "object",
        required: ["shares"],
        properties: {
          shares: {
            type: "array",
            items: {
              $ref: "#/components/schemas/SharedWithMeItem",
            },
          },
          pagination: {
            $ref: "#/components/schemas/Pagination",
          },
        },
      },
    },
  },

  RevokeShareResponse: {
    type: "object",
    required: ["success", "message"],
    properties: {
      success: {
        type: "boolean",
        example: true,
      },
      message: {
        type: "string",
        example: "File sharing access revoked successfully",
      },
    },
  },

  CreateShareRequest: {
    type: "object",
    required: ["email"],
    properties: {
      email: {
        type: "string",
        format: "email",
        example: "recipient@example.com",
        description: "Email address of the registered user to share the file with",
      },
    },
  },
};

export default swaggerSchemas;