# Health Check

Health checks allow deployment and monitoring systems to determine whether the backend is usable.

## Endpoint

Recommended:

```text
GET /api/health
```

## Checks

Initial checks:

- Application availability
- PostgreSQL connectivity

Where deployment requires it, distinguish liveness and readiness.

## Example

```json
{
  "status": "ok"
}
```

Do not expose environment variables, database credentials, secrets, or internal configuration through health endpoints.
