# Backend Development Rules

## 1. General Rules

- Use TypeScript strict mode.
- Prefer explicit types.
- Avoid `any`.
- Keep modules focused.
- Keep controllers thin.
- Put business logic in services.
- Validate external input.
- Do not expose database entities directly when a response DTO is appropriate.
- Do not duplicate business rules across controllers.

## 2. Naming

Use:

- `camelCase` for variables and functions
- `PascalCase` for classes, interfaces and DTO classes
- kebab-case for NestJS file/module names where appropriate

Examples:

```text
student.service.ts
student.controller.ts
create-student.dto.ts
```

## 3. DTO Rules

Every externally supplied request body must have a DTO.

Example:

```ts
export class CreateStudentDto {
  // validated fields
}
```

Use:

- `class-validator`
- `class-transformer`

Do not accept arbitrary request objects.

## 4. Validation

Global validation should be enabled.

Recommended behavior:

- whitelist unknown properties
- reject unexpected properties where appropriate
- transform validated values when required

## 5. Controllers

Controllers should:

- Receive requests
- Validate through DTOs
- Extract authenticated context
- Call services
- Return responses

Controllers should not:

- Contain complex business logic
- Build Prisma queries
- Perform tenant authorization manually in every endpoint

## 6. Services

Services contain:

- Business rules
- Authorization-related business decisions
- Tenant-aware operations
- Transaction orchestration
- Domain workflows

## 7. Database Access

Prisma is the standard database access layer.

Do not introduce another ORM for the MVP.

Database queries must respect tenant boundaries.

## 8. Transactions

Use Prisma transactions when multiple writes must succeed or fail together.

Examples:

- Creating a user and profile
- Creating an invoice and invoice items
- Student enrollment workflows

## 9. Error Handling

Use NestJS exceptions consistently.

Examples:

```text
BadRequestException
UnauthorizedException
ForbiddenException
NotFoundException
ConflictException
UnprocessableEntityException
```

Do not expose internal database errors directly to clients.

## 10. Logging

Logs should be structured and useful for debugging.

Never log:

- Passwords
- Access tokens
- Refresh tokens
- Secrets
- Sensitive personal information unnecessarily

## 11. Git Rules

Commits should be focused and descriptive.

Examples:

```text
feat(auth): add login endpoint
feat(students): add student creation
fix(attendance): enforce tenant filtering
test(auth): add refresh token tests
docs(api): update student endpoints
```

## 12. Feature Completion Rule

A feature is not considered complete until:

- Database changes are implemented
- Prisma migration is created
- DTOs are implemented
- API endpoints are implemented
- Authorization is implemented
- Tenant isolation is verified
- Tests are added
- Swagger documentation is updated
- Relevant documentation is updated

## 13. No Direct Production Schema Editing

Database schema changes must go through Prisma migrations.

Do not manually modify production tables as part of normal development.

## 14. Code Review Rule

Before merging, verify:

- Tenant isolation
- Authorization
- Validation
- Error handling
- Transaction requirements
- Test coverage
- API documentation
- Migration safety
