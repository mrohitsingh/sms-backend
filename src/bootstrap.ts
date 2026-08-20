import {
  BadRequestException,
  INestApplication,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { formatValidationErrors } from './common/utils/format-validation-errors';

export function configureApp(app: INestApplication): INestApplication {
  const configService = app.get(ConfigService);
  const apiPrefix = configService.get<string>('apiPrefix', 'api');
  const apiVersion = configService.get<string>('apiVersion', 'v1');
  const corsOrigins = configService.get<string>('corsOrigins', '');
  const enableSwagger = configService.get<boolean>('enableSwagger', false);

  app.use(helmet());

  app.setGlobalPrefix(apiPrefix);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: apiVersion,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) =>
        new BadRequestException({
          message: 'Validation failed',
          errors: formatValidationErrors(errors),
        }),
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  app.enableCors({
    origin: corsOrigins
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Tenant School Management API')
    .setDescription('Backend API for the Tenant School Management System')
    .setVersion('1.0')
    .build();

  if (enableSwagger) {
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup(`${apiPrefix}/docs`, app, document);
  }

  app.enableShutdownHooks();

  return app;
}
