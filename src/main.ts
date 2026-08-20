import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { configureApp } from './bootstrap';
import { resolveLogLevels } from './common/utils/resolve-log-levels';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const configService = app.get(ConfigService);
  const logLevel = configService.get<string>('logLevel', 'log');
  app.useLogger(resolveLogLevels(logLevel));

  configureApp(app);

  const port = configService.get<number>('port', 3000);

  await app.listen(port);
}

bootstrap().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
