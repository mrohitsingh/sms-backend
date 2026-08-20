import { validateEnv } from '../../src/config/env.validation';

describe('validateEnv', () => {
  it('accepts valid Phase 1 environment variables', () => {
    const result = validateEnv({
      NODE_ENV: 'test',
      PORT: '3000',
      API_PREFIX: 'api',
      API_VERSION: 'v1',
      DATABASE_URL: 'postgresql://localhost:5432/test',
      CORS_ORIGINS: 'http://localhost:3001',
      LOG_LEVEL: 'info',
      ENABLE_SWAGGER: 'true',
    });

    expect(result.NODE_ENV).toBe('test');
    expect(result.PORT).toBe(3000);
    expect(result.API_PREFIX).toBe('api');
  });

  it('rejects missing required variables', () => {
    expect(() =>
      validateEnv({
        NODE_ENV: 'test',
        PORT: '3000',
      }),
    ).toThrow();
  });
});
