export default () => ({
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  apiPrefix: process.env.API_PREFIX,
  apiVersion: process.env.API_VERSION,
  databaseUrl: process.env.DATABASE_URL,
  corsOrigins: process.env.CORS_ORIGINS,
  logLevel: process.env.LOG_LEVEL,
  enableSwagger: process.env.ENABLE_SWAGGER === 'true',
});
