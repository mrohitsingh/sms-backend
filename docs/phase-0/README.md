# Phase 0 — Backend Architecture & Development Rules

## Purpose

Phase 0 establishes the architectural and engineering rules for the Tenant School Management System backend before feature implementation begins.

The goal is to create a stable contract for:

- Architecture
- Multi-tenancy
- Security
- API design
- Database access
- Module boundaries
- Development workflow
- Testing
- Documentation

## Backend Stack

- NestJS 11+
- TypeScript
- Prisma 7+
- PostgreSQL
- REST API
- Swagger

## Phase 0 Deliverables

1. Architecture definition
2. Multi-tenancy strategy
3. Security baseline
4. API conventions
5. Development rules
6. Module boundaries
7. Database conventions
8. Testing conventions
9. Documentation rules



## Architecture Summary

```text
Next.js Frontend
       |
       | HTTPS / REST
       v
NestJS Backend
       |
     Prisma
       |
       v
PostgreSQL
```

The backend is independently deployable from the frontend.

## Multi-Tenancy

The MVP uses:

> Shared database + shared schema + school_id isolation.

Tenant-owned records must be associated with a tenant.

Tenant context must be derived from the authenticated request and must not be trusted from arbitrary client input.

## Core Security Principle

Every tenant-scoped operation must enforce tenant isolation at the backend/service/data-access boundary.

```text
Request
  -> Authentication
  -> Tenant Context
  -> Authorization
  -> Business Logic
  -> Prisma
  -> PostgreSQL
```



## Phase 0 Exit Criteria

Phase 0 is complete when:

- Architecture is approved
- Tenant strategy is approved
- Security model is documented
- API conventions are documented
- Development rules are documented
- Module boundaries are defined
- Database conventions are defined
- Testing strategy is defined
- Documentation update rules are defined

No major feature development should begin before these decisions are settled.