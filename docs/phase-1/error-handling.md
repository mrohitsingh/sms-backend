# Error Handling

API errors must be predictable, safe, and consistent.

## Exceptions

Use standard NestJS exceptions such as:

```text
BadRequestException
UnauthorizedException
ForbiddenException
NotFoundException
ConflictException
UnprocessableEntityException
TooManyRequestsException
```

## Error Contract

Target structure:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": []
}
```

The exact contract can be finalized before Phase 2.

## Rules

- Do not expose stack traces, SQL, connection strings, or secrets to clients.
- Translate relevant Prisma errors into API-level errors.
- For example, a unique constraint violation should normally become `409 Conflict`.
- Internal diagnostic details belong in secure logs.

