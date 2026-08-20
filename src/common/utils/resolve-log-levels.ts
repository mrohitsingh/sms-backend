import { LogLevel } from '@nestjs/common';

const NEST_LOG_LEVELS: LogLevel[] = [
  'error',
  'warn',
  'log',
  'debug',
  'verbose',
];

export function resolveLogLevels(level: string): LogLevel[] {
  const normalized = level === 'info' ? 'log' : level;
  const index = NEST_LOG_LEVELS.indexOf(normalized as LogLevel);

  if (index === -1) {
    return ['error', 'warn', 'log'];
  }

  return NEST_LOG_LEVELS.slice(0, index + 1);
}
