import { config as loadEnv } from 'dotenv';
import 'reflect-metadata';

loadEnv({ path: '.env', quiet: true });

process.env.NODE_ENV = 'test';

if (process.env.TEST_DATABASE_URL) {
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
}

process.env.API_PREFIX ??= 'api';
process.env.API_VERSION ??= 'v1';
process.env.LOG_LEVEL ??= 'error';
process.env.CORS_ORIGINS ??= 'http://localhost:3001';
process.env.ENABLE_SWAGGER = 'true';
