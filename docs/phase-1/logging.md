# Logging

Logging must provide useful diagnostics without exposing sensitive information.

## Levels

```text
error
warn
info
debug
```

Production should avoid unnecessary debug logging.

## Request Metadata

Where practical, capture:

- HTTP method
- Path
- Status code
- Duration
- Request/correlation ID

Do not log request bodies by default.

## Sensitive Data

Never log passwords, access tokens, refresh tokens, authorization headers, database URLs, or API secrets.

## Correlation ID

Establish a request/correlation ID so a request can be traced across logs.

## Structure

Prefer structured logs so they can later be consumed by observability systems.
