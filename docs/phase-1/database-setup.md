# PostgreSQL Database Setup

## Database

PostgreSQL is the primary relational database. The MVP uses one PostgreSQL database with a shared schema.

## Connection

Use:

```env
DATABASE_URL=
```

Never hard-code database credentials.

## Migrations

Schema changes must go through Prisma migrations. Do not make undocumented manual production schema changes.

Development flow:

```text
Update Prisma schema
        ↓
Create migration
        ↓
Apply migration
        ↓
Generate Prisma Client
        ↓
Run tests
```

## Safety

Before destructive operations, verify the environment and migration. Production data should have an appropriate backup strategy.

## Pooling

If a managed PostgreSQL provider or pooler is used, follow its current Prisma connection guidance without leaking provider-specific assumptions into domain code.
