# Testing Strategy

## Unit Tests

- Tenant validation
- Session validation
- Business rules

## Integration Tests

- Tenant creation
- Session creation
- Database persistence

## Tenant Isolation Tests

Tenant A cannot:
- read Tenant B data
- update Tenant B records
- delete Tenant B records

## Future Regression Tests

Every new tenant-aware module must inherit these tests.
