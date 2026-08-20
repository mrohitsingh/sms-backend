# Academic Session

## Purpose

Every academic record belongs to an academic session.

Examples:

- 2026–2027
- 2027–2028

## Suggested Fields


| Field     | Purpose         |
| --------- | --------------- |
| id        | Identifier      |
| schoolId  | Owner           |
| name      | Session label   |
| startDate | Beginning       |
| endDate   | Ending          |
| isActive  | Current session |


## Business Rules

- One active session per tenant.
- End date must be after start date.
- Historical sessions should remain available.
- Students will later enroll into a specific session.

