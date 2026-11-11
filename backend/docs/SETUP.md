
# Milestone 2 - Authentication Setup

## Prerequisites

- Node.js
- npm
- Docker Desktop
- PostgreSQL database
- Existing Milestone 1 backend foundation

## 1. Install dependencies

Open PowerShell:

cd backend

npm install

## 2. Configure environment

Copy the existing environment template:

Copy-Item .env.example .env

Configure the following values:

NODE_ENV=development
PORT=4000
API_PREFIX=/api/v1
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/tourist_db?schema=public"
CORS_ORIGIN=http://localhost:8081
JWT_ACCESS_SECRET=YOUR_LONG_RANDOM_SECRET_AT_LEAST_32_CHARACTERS
JWT_ACCESS_EXPIRES_IN=15m

Use the actual PostgreSQL database name, username,
password, and port from the existing Docker configuration.

Do not commit .env.

## 3. Start PostgreSQL

From the repository root:

docker compose up -d

Check:

docker compose ps

## 4. Generate Prisma client

From backend:

npm run prisma:generate

## 5. Database migration

Authentication uses the existing Tourist, Guide,
and VRSP Prisma models.

No new database tables are required for this
authentication implementation.

If the existing Milestone 1 migration has already
been applied, do not recreate it.

If the database has not yet been initialized,
follow the original Milestone 1 migration
instructions after verifying the database state.

## 6. Type checking

npm run typecheck

## 7. Start development server

npm run dev

API:

http://localhost:4000

Health:

http://localhost:4000/api/v1/health

## 8. Authentication endpoints

POST http://localhost:4000/api/v1/auth/register

POST http://localhost:4000/api/v1/auth/login

GET http://localhost:4000/api/v1/auth/me

## 9. Build

npm run build

## 10. Production start

npm start

## Important

- Do not commit .env.
- Do not expose JWT secrets.
- Do not recreate existing database tables.
- Do not remove the existing Prisma models.
- Admin authentication will be implemented separately
  after deciding on the admin provisioning mechanism.
