# Backend Security Baseline

## 1. Authentication

Authentication must verify the identity of the requester.

Authentication does not grant business permissions.

## 2. Authorization

Authorization must be enforced server-side.

Never rely on:

- Frontend route protection alone
- Hidden UI controls
- Client-provided role values
- Client-provided tenant IDs

## 3. Tenant Isolation

Tenant isolation is a mandatory security boundary.

All tenant-owned resources must be protected against cross-tenant access.

## 4. Password Security

Passwords must:

- Never be stored in plain text
- Be hashed using a modern password hashing algorithm
- Never appear in logs
- Never be returned through APIs

## 5. Token Security

Tokens must:

- Have controlled expiration
- Be invalidatable where the chosen authentication strategy requires it
- Never be logged
- Be transmitted only over HTTPS in production

## 6. Input Validation

All external input must be validated.

Validate:

- Body
- Query parameters
- Route parameters
- Headers where relevant

## 7. Mass Assignment Protection

Never directly persist arbitrary request bodies.

Use explicit DTOs and map accepted properties.

## 8. IDOR Protection

Resource IDs must never be treated as authorization.

Example:

```text
GET /students/:studentId
```

must verify that the student belongs to the authenticated tenant and that the user has permission to access it.

## 9. Rate Limiting

Authentication and other abuse-prone endpoints should have rate limiting.

Examples:

```text
/login
/forgot-password
/reset-password
```

## 10. CORS

Production CORS must allow only configured frontend origins.

Do not use unrestricted origins in production.

## 11. Security Headers

Use appropriate HTTP security headers.

## 12. Sensitive Data

Avoid returning unnecessary sensitive information.

Responses should expose only fields required by the client.

## 13. Audit Logging

Important security-sensitive actions should be auditable.

Examples:

- Login
- Logout
- Password change
- Role changes
- Permission changes
- User activation/deactivation
- Student data modifications

## 14. Database Security

Production database credentials must be stored securely.

Use least-privilege credentials where practical.

## 15. Security Testing

Tests must cover:

- Authentication bypass
- Authorization bypass
- Cross-tenant access
- IDOR
- Invalid input
- Role escalation
- Permission escalation
