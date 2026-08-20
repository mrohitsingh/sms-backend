# Validation Rules

## Tenant Validation

- name required
- email required
- valid timezone

## Academic Session Validation

- name required
- valid dates
- endDate after startDate
- only one active session

## DTO Rules

Every request should eventually use class-validator DTOs.

Validation occurs before business logic.
