import { jest } from '@jest/globals';
import { BadRequestException } from '@nestjs/common';
import { ArgumentsHost } from '@nestjs/common';
import { HttpExceptionFilter } from '../../src/common/filters/http-exception.filter';

describe('HttpExceptionFilter', () => {
  const filter = new HttpExceptionFilter();

  it('returns the locked API error contract', () => {
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const host = {
      switchToHttp: () => ({
        getResponse: () => ({ status }),
        getRequest: () => ({ url: '/api/v1/example' }),
      }),
    } as ArgumentsHost;

    filter.catch(
      new BadRequestException({
        message: 'Validation failed',
        errors: [{ field: 'email', message: 'Invalid email' }],
      }),
      host,
    );

    expect(status).toHaveBeenCalledWith(400);
    expect(json).toHaveBeenCalledWith({
      statusCode: 400,
      message: 'Validation failed',
      errors: [{ field: 'email', message: 'Invalid email' }],
    });
  });
});
