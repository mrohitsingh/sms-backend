# Project Setup

## Rules

- Use current stable NestJS 11+ compatible tooling.
- Use TypeScript strict mode.
- Keep dependencies minimal and justified.
- Use domain-oriented modules.
- Keep `.env` out of source control.

## Required Dependencies

Core:

```text
@nestjs/common
@nestjs/core
@nestjs/config
@nestjs/swagger
class-validator
class-transformer
```

Database:

```text
prisma
@prisma/client
```

Testing:

```text
jest
@nestjs/testing
```

## Scripts

Provide scripts for development, build, production start, lint, format, unit tests, E2E tests, Prisma generation, migrations, and Prisma Studio.

## Source Structure

```text
src/
├── common/
├── config/
├── health/
├── prisma/
└── main.ts
```

Do not create a generic services directory for unrelated business logic.
