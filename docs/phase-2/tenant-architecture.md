# Tenant Architecture

## Why Multi-Tenancy

Each school is an independent customer using the same application.

Requirements:
- Shared infrastructure
- Data isolation
- Scalable onboarding
- Low operational cost

## Chosen Strategy

| Option | MVP |
|--------|-----|
| Shared DB + Shared Schema | ✅ |
| Shared DB + Schema per Tenant | ❌ |
| Database per Tenant | ❌ |

## Request Lifecycle

```text
HTTP Request
    ↓
NestJS
    ↓
Tenant Context
    ↓
Business Service
    ↓
Prisma
    ↓
PostgreSQL
```

## Future Compatibility

The architecture allows migration to schema-per-tenant or database-per-tenant later.
