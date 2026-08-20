# Prisma Setup

Prisma is the database access layer.

## Structure

```text
prisma/
├── schema.prisma
└── migrations/
```

If the selected Prisma version requires additional configuration files, commit them as well.

## Rules

- Do not manually edit generated Prisma Client code.
- Create a dedicated NestJS `PrismaService` for client lifecycle management.
- Do not create a new Prisma Client per request.
- Use migrations for schema evolution.
- Use typed Prisma APIs by default.
- Avoid raw SQL unless justified; parameterize unavoidable raw SQL.
- Use transactions for atomic multi-write operations.
- All future queries must respect tenant isolation.
