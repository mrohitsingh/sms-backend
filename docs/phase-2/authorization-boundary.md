# Authorization Boundary

## Not Implemented Yet

Phase 2 intentionally avoids RBAC.

## Future Security Order

```text
Authentication
      ↓
Tenant Context
      ↓
Authorization
      ↓
Business Logic
```

Even platform administrators should not accidentally bypass tenant isolation.
