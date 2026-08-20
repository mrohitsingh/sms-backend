# API Specification

## Base URL

`/api/v1`

## Tenant APIs


| Method | Endpoint     | Purpose       |
| ------ | ------------ | ------------- |
| POST   | /schools     | Create tenant |
| GET    | /schools/:id | Get tenant    |
| PATCH  | /schools/:id | Update tenant |


### Example Request

```json
{
  "name": "Green Valley School",
  "slug": "green-valley",
  "timezone": "Asia/Kolkata"
}
```

### Example Response

```json
{
  "id": "1",
  "name": "Green Valley School",
  "slug": "green-valley",
  "status": "ACTIVE"
}
```

## Academic Session APIs


| Method | Endpoint               |
| ------ | ---------------------- |
| POST   | /academic-sessions     |
| GET    | /academic-sessions     |
| GET    | /academic-sessions/:id |
| PATCH  | /academic-sessions/:id |




## Response Rules

- Standard status codes
- Validation errors
- Consistent JSON structure

