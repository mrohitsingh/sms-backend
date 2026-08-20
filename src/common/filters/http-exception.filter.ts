import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type {
  ApiErrorResponse,
  FieldError,
} from '../types/api-error-response.interface';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<{
      status: (code: number) => { json: (body: ApiErrorResponse) => void };
    }>();
    const request = ctx.getRequest<{ url?: string }>();

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errors: FieldError[] = [];

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null
      ) {
        const responseBody = exceptionResponse as {
          message?: string | string[];
          errors?: FieldError[];
        };

        if (responseBody.errors?.length) {
          message =
            typeof responseBody.message === 'string'
              ? responseBody.message
              : 'Validation failed';
          errors = responseBody.errors;
        } else if (Array.isArray(responseBody.message)) {
          message = 'Validation failed';
          errors = responseBody.message.map((item) => ({
            field: 'request',
            message: item,
          }));
        } else {
          message = responseBody.message ?? exception.message;
        }
      }
    } else if (
      typeof exception === 'object' &&
      exception !== null &&
      'code' in exception &&
      (exception as { code: string }).code === 'P2002'
    ) {
      statusCode = HttpStatus.CONFLICT;
      message = 'Resource already exists';
    } else if (
      typeof exception === 'object' &&
      exception !== null &&
      'code' in exception
    ) {
      const prismaError = exception as { code: string; stack?: string };
      this.logger.error(
        `Prisma error ${prismaError.code}`,
        prismaError.stack,
        request.url,
      );
    } else if (exception instanceof Error) {
      this.logger.error(exception.message, exception.stack, request.url);
    }

    response.status(statusCode).json({
      statusCode,
      message,
      errors,
    });
  }
}
