import swaggerJsdoc from "swagger-jsdoc";
import swaggerSchemas from "./swagger-schemas.js";

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "File Storage and Sharing API",
      version: "1.0.0",
      description:
        "REST API for uploading, managing, downloading, and sharing files securely.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: swaggerSchemas
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;