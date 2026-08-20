import { ValidationError } from 'class-validator';
import type { FieldError } from '../types/api-error-response.interface';

export function formatValidationErrors(
  errors: ValidationError[],
  parentPath = '',
): FieldError[] {
  const formatted: FieldError[] = [];

  for (const error of errors) {
    const field = parentPath
      ? `${parentPath}.${error.property}`
      : error.property;

    if (error.constraints) {
      for (const message of Object.values(error.constraints)) {
        formatted.push({ field, message });
      }
    }

    if (error.children?.length) {
      formatted.push(...formatValidationErrors(error.children, field));
    }
  }

  return formatted;
}
