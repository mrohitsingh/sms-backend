# Configuration Management

Configuration must be environment-driven and centralized.

## Initial Variables

```env
NODE_ENV=development
PORT=8000
API_PREFIX=api
API_VERSION=v1
DATABASE_URL=
CORS_ORIGINS=http://localhost:3001
LOG_LEVEL=info
```

## Rules

- Validate required variables at startup.
- Fail fast when configuration is invalid.
- Prefer `ConfigService` or typed configuration over scattered `process.env` access.
- Support development, test, and production environments.
- Never commit passwords, API keys, private keys, or other secrets.
- Maintain `.env.example` with safe placeholder values.

