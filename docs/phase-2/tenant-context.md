# Tenant Context

## Purpose

Tenant Context tells the application which tenant owns the request.

## Phase 2 Design

Authentication is not implemented yet.

Future flow:

```text
JWT
 ↓
Authenticated User
 ↓
Tenant Membership
 ↓
Tenant Context
```

## NestJS Concept

Future implementation should expose tenant context through reusable infrastructure rather than duplicated controller logic.
