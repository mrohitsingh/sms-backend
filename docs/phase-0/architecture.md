# Backend Architecture

## 1. Architectural Style

The backend will use a modular monolith architecture.

NestJS modules will provide strong domain boundaries while keeping deployment simple for the MVP.

Microservices are intentionally deferred.

## 2. High-Level Architecture

```text
                    ┌──────────────────────┐
                    │    Next.js Frontend  │
                    └──────────┬───────────┘
                               │ HTTPS
                               ▼
                    ┌──────────────────────┐
                    │     NestJS API       │
                    │                      │
                    │ Auth                 │
                    │ Tenants              │
                    │ Users                │
                    │ Roles / Permissions  │
                    │ Students              │
                    │ Teachers              │
                    │ Classes              │
                    │ Attendance            │
                    │ Fees                  │
                    └──────────┬───────────┘
                               │
                            Prisma
                               │
                               ▼
                    ┌──────────────────────┐
                    │      PostgreSQL      │
                    └──────────────────────┘
```

## 3. Backend Responsibilities

The backend is responsible for:

- Authentication
- Authorization
- Tenant isolation
- Business rules
- Data validation
- Persistence
- Auditability
- API contracts
- Error handling
- Security controls

The frontend must not be responsible for enforcing authorization.

## 4. Module Architecture

Initial module boundaries:

```text
src/
├── auth/
├── tenants/
├── users/
├── roles/
├── permissions/
├── students/
├── teachers/
├── classes/
├── academic-sessions/
├── attendance/
├── fees/
├── common/
├── config/
├── prisma/
└── health/
```

Each domain module should own its:

- Controller
- Service
- DTOs
- Domain-specific types
- Tests

## 5. Dependency Rules

Preferred dependency direction:

```text
Controller
    ↓
Service
    ↓
Repository / Prisma
    ↓
Database
```

Controllers must remain thin.

Business logic belongs in services/domain logic.

Database access must not be placed directly inside controllers.

## 6. Common Infrastructure

Cross-cutting infrastructure belongs under `common/`.

Examples:

```text
common/
├── decorators/
├── guards/
├── interceptors/
├── filters/
├── pipes/
├── middleware/
├── constants/
├── types/
└── utils/
```

Do not place domain-specific logic in `common/`.

## 7. API Versioning

APIs should be versioned from the beginning.

Recommended base path:

```text
/api/v1
```

Example:

```text
GET /api/v1/students
```

## 8. Stateless Application Design

Application instances should be horizontally scalable.

Do not store request-specific business state in process memory.

Sessions/tokens and persistent state must use appropriate external/persistent storage.

## 9. Configuration

All environment-specific values must come from configuration.

Examples:

```text
DATABASE_URL
JWT_SECRET
JWT_EXPIRES_IN
CORS_ORIGINS
NODE_ENV
```

Secrets must never be committed to source control.

## 10. Architectural Principle

Prefer simple, explicit architecture over premature abstraction.

The MVP should optimize for:

- Correctness
- Tenant isolation
- Maintainability
- Testability
- Clear domain boundaries

Not premature microservice decomposition.
