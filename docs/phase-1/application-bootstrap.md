# Application Bootstrap

Bootstrap configures global behavior before feature modules execute.

## Required Configuration

- API prefix
- API versioning
- Global validation
- CORS
- Swagger
- Graceful shutdown
- Logging
- Security-related HTTP configuration

## API

Target API shape:

```text
/api/v1
```

## Validation

Configure global validation with a baseline such as:

```text
whitelist: true
transform: true
```

## CORS

Production must use an explicit frontend-origin allowlist. Never use unrestricted production CORS.

## Shutdown

Close the HTTP server, Prisma connection, and future external resources gracefully.

## Startup

```text
Load environment
      ↓
Validate configuration
      ↓
Initialize NestJS
      ↓
Initialize Prisma
      ↓
Register global infrastructure
      ↓
Initialize Swagger
      ↓
Start HTTP server
```
