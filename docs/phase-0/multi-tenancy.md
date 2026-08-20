# Multi-Tenancy Strategy

## 1. MVP Strategy

The MVP uses:

> Shared database + shared schema + tenant_id.

Example:

```text
PostgreSQL
│
├── tenants
├── users
├── students
├── teachers
├── classes
└── attendance
```

Tenant-owned tables contain a tenant reference.

## 2. Tenant Context

The authenticated request must establish the tenant context.

Conceptually:

```text
JWT / Session
     ↓
Authenticated User
     ↓
Tenant Membership
     ↓
schoolId
```

The client must not be allowed to arbitrarily select another tenant.

## 3. Tenant Isolation

Every tenant-scoped query must be filtered by the authenticated tenant.

Example:

```ts
await prisma.student.findMany({
  where: {
    schoolId,
  },
});
```

Do not do this:

```ts
await prisma.student.findMany();
```

when returning tenant-owned records.

## 4. Resource Access

For resources identified by ID:

```text
GET /students/:id
```

The query must verify both:

```text
student.id = requestedId
AND
student.schoolId = authenticatedSchoolId
```



## 5. Cross-Tenant Access

Cross-tenant access must never be possible through normal school-user APIs.

A user from School A must not be able to:

- Read School B students
- Update School B teachers
- Delete School B classes
- View School B fees
- Modify School B configuration



## 6. Super-Admin Access

If a platform-level Super Admin is introduced, its cross-tenant access must be explicit and separately authorized.

Do not bypass tenant isolation merely because a user has a high-level role.

## 7. Tenant-Scoped Unique Constraints

When a value only needs to be unique inside a tenant, use a composite unique constraint.

Conceptually:

```text
UNIQUE(school_id, code)
```

instead of globally unique `code`.

## 8. Tenant-Scoped Foreign Keys

Domain relationships should preserve tenant boundaries.

Application-level validation must prevent linking records belonging to different tenants.

## 9. Tenant Isolation Testing

Every tenant-aware module should include tests for:

```text
School A → own data → allowed

School A → School B data → denied/not found
```



## 10. Future Scalability

The MVP architecture should leave room for:

```text
Shared schema
     ↓
Schema-per-tenant
     ↓
Database-per-tenant
```

Migration to a different isolation model is a future architectural decision.

Do not implement that complexity in the MVP unless required.