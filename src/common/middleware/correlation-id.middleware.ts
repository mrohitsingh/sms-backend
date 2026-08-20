import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { NextFunction, Request, Response } from 'express';
import { CORRELATION_ID_HEADER } from '../constants/correlation-id.constants';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const existingId = req.headers[CORRELATION_ID_HEADER];
    const correlationId =
      typeof existingId === 'string' && existingId.length > 0
        ? existingId
        : randomUUID();

    req.headers[CORRELATION_ID_HEADER] = correlationId;
    res.setHeader(CORRELATION_ID_HEADER, correlationId);
    next();
  }
}
