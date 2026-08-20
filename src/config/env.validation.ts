import { plainToInstance, Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  validateSync,
} from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV!: Environment;

  @IsInt()
  @Min(1)
  PORT!: number;

  @IsString()
  @IsNotEmpty()
  API_PREFIX!: string;

  @IsString()
  @IsNotEmpty()
  API_VERSION!: string;

  @IsString()
  @IsNotEmpty()
  DATABASE_URL!: string;

  @IsString()
  @IsNotEmpty()
  CORS_ORIGINS!: string;

  @IsString()
  @IsNotEmpty()
  LOG_LEVEL!: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  ENABLE_SWAGGER!: boolean;
}

export function validateEnv(config: Record<string, unknown>) {
  const validated = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validated, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validated;
}
