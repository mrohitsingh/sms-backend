# API Standards

## 1. Base URL

All APIs use:

```text
/api/v1
```

Example:

```text
GET /api/v1/students
```

## 2. HTTP Methods

Use standard HTTP semantics.

```text
GET     Read
POST    Create
PATCH   Partial update
PUT     Full replacement when required
DELETE  Delete
```

Avoid using POST for ordinary retrieval.

## 3. Resource Naming

Use plural nouns.

Good:

```text
/students
/teachers
/classes
/attendance
/fees
```

Avoid:

```text
/getStudents
/createStudent
```

## 4. Status Codes

Common responses:

```text
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
429 Too Many Requests
500 Internal Server Error
```



## 5. Pagination

Collection endpoints should support pagination.

Example:

```text
GET /api/v1/students?page=1&limit=20
```

The exact response contract should be standardized before implementation.

## 6. Filtering

Use query parameters.

Example:

```text
GET /api/v1/students?status=active
```



## 7. Sorting

Example:

```text
GET /api/v1/students?sortBy=createdAt&sortOrder=desc
```

Only allow explicitly supported sort fields.

## 8. Searching

Example:

```text
GET /api/v1/students?search=rahul
```

Search implementation must avoid unsafe raw SQL construction.

## 9. Request Validation

Invalid requests must return a consistent validation error structure.

## 10. Error Response

Use a consistent error format.

Conceptually:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email"
    }
  ]
}
```

The exact contract should be finalized during Phase 1.

## 11. Response DTOs

Do not automatically serialize complete Prisma models.

Use response DTOs where exposing the complete persistence model would be unsafe or undesirable.

## 12. Authentication Headers

Authenticated requests should use the selected authentication mechanism consistently.

For bearer-token authentication:

```text
Authorization: Bearer <token>
```



## 13. Swagger

Every public API endpoint must be documented with OpenAPI decorators.

Documentation should include:

- Summary
- Description
- Tags
- Authentication requirements
- Parameters
- Request body
- Success response
- Error responses



## 14. API Compatibility

Breaking API changes require explicit versioning or a documented migration strategy.

Do not silently change existing response contracts.

## 15. API Design Principle

APIs should represent business resources and operations clearly.

Prefer:

```text
POST /students/:id/enrollments
```

over generic endpoints such as:

```text
POST /student-action
```

