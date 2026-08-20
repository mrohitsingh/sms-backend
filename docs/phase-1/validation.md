# Validation

All external input must be validated at the API boundary.

## Global Validation

Use NestJS `ValidationPipe` globally. Baseline configuration:

```text
whitelist: true
transform: true
```

`forbidNonWhitelisted` should follow the finalized API policy.

## DTO Rule

Every external request body must use an explicit DTO. Query and route parameters must also be validated.

## Security

Validation is not authorization. The conceptual flow remains:

```text
Validation
   ↓
Authentication
   ↓
Authorization
   ↓
Business Logic
```

Do not treat valid input as authorized input.
