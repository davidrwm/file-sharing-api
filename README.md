# File Storage and Sharing API

A RESTful API built with Node.js, Express, PostgreSQL, and Prisma for uploading, managing, downloading, and securely sharing files between registered users.

## Features

- **Authentication** — Register and log in using email and password, with JWT-based authentication.
- **File uploads** — Upload supported file types with a maximum file size of 5 MB.
- **File management** — List files, retrieve file metadata, download files, and delete owned files.
- **Secure file sharing** — Share files with registered users by email.
- **Access control** — Restrict file operations based on ownership and sharing permissions.
- **Share management** — View recipients, list files shared with you, and revoke sharing access.
- **Input validation** — Validate request data using Zod.
- **API documentation** — Explore endpoints and try requests through Swagger UI.
- **Automated testing** — Run API tests using Vitest and Supertest.
- **Security middleware** — Use JWT authentication and Helmet, with CORS support.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express 5 | REST API framework |
| PostgreSQL | Relational database |
| Prisma 7 | Database ORM |
| `@prisma/adapter-pg` and `pg` | PostgreSQL connectivity |
| JWT and bcrypt | Authentication and password hashing |
| Multer | Multipart file uploads |
| Zod | Request validation |
| Swagger | API documentation |
| Vitest and Supertest | Automated testing |
| Helmet and CORS | HTTP security headers and cross-origin configuration |

## Prerequisites

Before running the project, install:

- Node.js and npm
- PostgreSQL
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd file-sharing-api
```

Replace `<your-repository-url>` with your Git repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root using `.env.example` as a template.

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="your_development_database_connection_string"
JWT_SECRET="your_long_random_secret"
```

Configure `DATABASE_URL` with your PostgreSQL database connection string and use a strong, private JWT secret.

Do not commit `.env` or other files containing credentials to version control.

### 4. Configure PostgreSQL and Prisma

Create your development database in PostgreSQL.

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply your database migrations using the Prisma configuration and migration workflow already established in this project.

If you need to create a new development migration, use your configured Prisma migration command and provide a descriptive migration name.

**Important:** This project uses Prisma 7 with the PostgreSQL driver adapter. Follow the project's existing Prisma configuration when running Prisma CLI commands.

### 5. Start the development server

```bash
npm run dev
```

The API should be available at:

`http://localhost:3000`

To start the server without Nodemon, use:

```bash
npm start
```

## API Documentation

Once the server is running, open Swagger UI:

`http://localhost:3000/api-docs`

Swagger UI provides an interactive reference for the available endpoints, request parameters, authentication requirements, and response schemas.

For protected endpoints, use the **Authorize** control and enter your JWT access token as a Bearer token.

## API Endpoints

All API routes are prefixed with `/api`.

### Health

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check API health |
| GET | `/api/health/db` | Check database connectivity |

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive an access token |
| GET | `/api/auth/me` | Get the authenticated user's information |

### Files

All file endpoints require authentication.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/files` | List files owned by the current user |
| POST | `/api/files` | Upload a file |
| GET | `/api/files/:fileId` | Retrieve file metadata |
| GET | `/api/files/:fileId/download` | Download a file |
| DELETE | `/api/files/:fileId` | Delete an owned file |

### File Sharing

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/files/:fileId/shares` | Share a file with a registered user |
| GET | `/api/files/:fileId/shares` | List recipients for a file |
| GET | `/api/files/shared-with-me` | List files shared with the current user |
| DELETE | `/api/files/shares/:shareId` | Revoke access to a shared file |

The API uses Bearer-token authentication for protected routes. File owners can manage their own files and sharing permissions, while authorized recipients can access files shared with them.

For detailed request and response formats, consult Swagger UI.

## Running Tests

The project uses Vitest and Supertest to test API behavior.

### 1. Configure the test environment

Create a `.env.test` file in the project root. Configure it with a **separate test database** and the required test environment variables.

For example:

```env
PORT=3001
NODE_ENV=test
DATABASE_URL="your_test_database_connection_string"
JWT_SECRET="your_test_jwt_secret"
```

Use the variable names expected by your application and Prisma configuration. Never point your test environment at a production database.

Ensure the test database schema is initialized before running the tests.

### 2. Run the test suite

```bash
npm test
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

## File Upload and Access Control

- Upload requests use `multipart/form-data` with a field named `file`.
- The maximum upload size is 5 MB.
- Unsupported file types are rejected according to the upload middleware's validation rules.
- File metadata and file contents are handled separately.
- File access is restricted to the owner and authorized recipients.
- Only file owners can delete their files or revoke sharing permissions.
- Shared files can be accessed only while the relevant sharing permission remains valid.

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port used by the Express server |
| `NODE_ENV` | Application environment |
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret used to sign and verify JWTs |

Keep development and test database configurations separate.

## Future Improvements

Potential enhancements for future versions include:

- Cloud object storage integration
- Expiring share links
- File download quotas and rate limiting
- File versioning
- Docker-based development setup
- CI workflows for automated testing
- Deployment and production monitoring

## License

This project is currently licensed under ISC, as specified in `package.json`.