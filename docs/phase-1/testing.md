# Phase 1 Testing Foundation

## Levels

```text
Unit Tests
Integration Tests
E2E Tests
```

## Unit

Use for isolated logic and services with mocked dependencies.

## Integration

Verify the infrastructure path:

```text
NestJS
   ↓
Prisma
   ↓
PostgreSQL
```

## E2E

At minimum verify the HTTP health endpoint and basic application bootstrap.

## Test Database

Tests must never accidentally use development or production databases. Use a dedicated test database.

## Required Phase 1 Tests

- Application bootstrap
- Configuration validation
- Health endpoint
- Database connectivity
- Basic Prisma integration

Tests should be deterministic and independent of execution order.
