# BloomTech System — Run Guide

## Prerequisites
- Node.js 18+ and npm
- PostgreSQL running locally

## Backend Setup
- Create `.env` in `backend/` (already present):
  - `PGHOST=localhost`
  - `PGUSER=postgres`
  - `PGPASSWORD=postgres`
  - `PGDATABASE=Bloomtech`
  - `PGPORT=5432`
- Install dependencies: from `backend/` run `npm install`
- Create tables: import `databasse.sql` into your `Bloomtech` database (via pgAdmin or `psql`)
- Seed admin user: from `backend/` run `npm run seed:admin`
  - Login identifier: `admin` or `admin@example.com`
  - Password: `admin123`

## Frontend Setup
- Install dependencies: from `client/` run `npm install`

## Run (Development)
- Start API: from `backend/` run `npm run dev` → `http://localhost:3000`
- Start frontend: from `client/` run `npm run dev` → `http://localhost:5173`

## Login Flow
- Enter `admin` (or `admin@example.com`) and `admin123` on the Login page.
- Successful login navigates to the Dashboard.

## Troubleshooting
- Port in use (`EADDRINUSE`): stop duplicate dev servers; keep one backend on `3000` and one frontend on `5173`.
- DB errors: verify PostgreSQL is running and `.env` values are correct.
- CORS: API enables `cors()` for local dev; frontend calls `http://localhost:3000`.

