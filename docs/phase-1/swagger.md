# Swagger / OpenAPI

Swagger provides the API contract and interactive documentation.

## Route

Use a predictable development route such as:

```text
/api/docs
```

## Endpoint Requirements

Document:

- Summary
- Description
- Tags
- Parameters
- Request body
- Authentication requirements
- Success responses
- Error responses

## Rules

- Swagger must reflect the actual implementation.
- Do not document endpoints that do not exist.
- DTOs should provide useful OpenAPI metadata where reflection is insufficient.
- Authentication security schemes are added when authentication is implemented.
