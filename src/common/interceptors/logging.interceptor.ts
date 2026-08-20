import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { CORRELATION_ID_HEADER } from '../constants/correlation-id.constants';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<{
      method: string;
      url: string;
      headers: Record<string, string | string[] | undefined>;
    }>();
    const { method, url, headers } = request;
    const correlationId = headers[CORRELATION_ID_HEADER] as string | undefined;
    const startedAt = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const response = context
            .switchToHttp()
            .getResponse<{ statusCode: number }>();
          this.logger.log({
            correlationId,
            method,
            path: url,
            statusCode: response.statusCode,
            durationMs: Date.now() - startedAt,
          });
        },
        error: (error: Error) => {
          this.logger.error({
            correlationId,
            method,
            path: url,
            durationMs: Date.now() - startedAt,
            message: error.message,
          });
        },
      }),
    );
  }
}
