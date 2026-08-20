# Database Design

## Core Tables

### tenants

Stores school organization information.

### academic_sessions

Stores yearly academic periods.

## ER Diagram

```text
Tenant
 └── AcademicSession
```

Future modules connect through tenantId.

## Standard Columns

Every tenant-owned table should eventually contain:

- id
- schoolId
- createdAt
- updatedAt

## Prisma Guidelines

- human readable IDs
- Explicit relations
- Composite indexes
- Foreign keys

