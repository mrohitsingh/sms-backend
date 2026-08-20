import { resolveLogLevels } from '../../src/common/utils/resolve-log-levels';

describe('resolveLogLevels', () => {
  it('maps info to NestJS log level', () => {
    expect(resolveLogLevels('info')).toEqual(['error', 'warn', 'log']);
  });

  it('includes debug when configured', () => {
    expect(resolveLogLevels('debug')).toEqual([
      'error',
      'warn',
      'log',
      'debug',
    ]);
  });

  it('falls back to error, warn, and log for unknown levels', () => {
    expect(resolveLogLevels('unknown')).toEqual(['error', 'warn', 'log']);
  });
});
