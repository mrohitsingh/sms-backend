import { ValidationError } from 'class-validator';
import { formatValidationErrors } from '../../src/common/utils/format-validation-errors';

describe('formatValidationErrors', () => {
  it('maps class-validator errors to field and message pairs', () => {
    const errors: ValidationError[] = [
      {
        property: 'email',
        constraints: {
          isEmail: 'email must be an email',
        },
        children: [],
        target: {},
        value: 'invalid',
      },
    ];

    expect(formatValidationErrors(errors)).toEqual([
      {
        field: 'email',
        message: 'email must be an email',
      },
    ]);
  });
});
