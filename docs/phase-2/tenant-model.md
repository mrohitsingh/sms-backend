# Tenant Model

## Purpose

A Tenant represents a school organization.

## Suggested Fields


| Column    | Type     | Notes                    |
| --------- | -------- | ------------------------ |
| id        | int      | PK                       |
| name      | String   | School name              |
| slug      | String   | Unique public identifier |
| status    | shortInt | 1/2/3                    |
| timezone  | String   | IANA timezone            |
| createdAt | DateTime | Audit                    |
| updatedAt | DateTime | Audit                    |


## Relationships

Tenant owns:

- Academic Sessions
- Future Users
- Students
- Teachers
- Classes
- Attendance
- Fees

## Status Rules

ACTIVE → Normal operation

SUSPENDED → Login/features disabled

ARCHIVED → Historical access only