import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { CorrelationIdMiddleware } from './common/middleware/correlation-id.middleware';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AppConfigModule, PrismaModule, HealthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(CorrelationIdMiddleware)
      .forRoutes({ path: '{*path}', method: RequestMethod.ALL });
  }
}
