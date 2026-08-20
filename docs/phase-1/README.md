# Phase 1 — Backend Foundation

## Purpose

Establish the production-quality technical foundation for the NestJS backend. No business-domain features are implemented in this phase.

## Technology

- NestJS 11+
- TypeScript
- Prisma 7+
- PostgreSQL
- Jest
- Swagger / OpenAPI
- ESLint
- Prettier

## Scope

- NestJS project setup
- TypeScript configuration
- Environment configuration
- PostgreSQL connection
- Prisma setup
- Application bootstrap
- Global validation
- Global error handling
- Logging
- Swagger
- Health checks
- Testing foundation
- Basic security configuration
- Development scripts

## Out of Scope

Authentication, users, roles, permissions, tenants, students, teachers, classes, attendance, and fees belong to later phases.

## Target Structure

```text
src/
├── common/
├── config/
├── health/
├── prisma/
├── app.module.ts
└── main.ts

prisma/
├── schema.prisma
└── migrations/

test/
├── unit/
└── integration/
```

## Exit Criteria

- Application starts successfully
- Environment variables are validated
- PostgreSQL connection works
- Prisma Client connects
- Prisma migrations work
- Global validation is enabled
- Global error handling is configured
- Logging is available
- Swagger is available
- Health endpoint works
- Unit and integration test setup works
- Linting and formatting work
- No secrets are committed
- Production build succeeds
