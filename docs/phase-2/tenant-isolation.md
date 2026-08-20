# Tenant Isolation

## Security Principle

Tenant isolation is mandatory.

Every tenant-owned query must filter by tenantId.

## Correct Pattern

```ts
await prisma.student.findMany({
  where: { schoolId }
})
```

## Incorrect Pattern

```ts
await prisma.student.findMany()
```

## ID-based Access

Queries by ID must verify:

- record ID
- tenant ID

## Composite Uniqueness

Tenant-specific values should use composite uniqueness, e.g.:

`UNIQUE(school_id, admission_no)`