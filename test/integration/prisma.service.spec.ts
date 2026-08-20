import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigModule } from '../../src/config/config.module';
import { PrismaService } from '../../src/prisma/prisma.service';
import { PrismaModule } from '../../src/prisma/prisma.module';

describe('PrismaService (integration)', () => {
  let module: TestingModule;
  let prisma: PrismaService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AppConfigModule, PrismaModule],
    }).compile();

    prisma = module.get(PrismaService);
    await module.init();
  });

  afterAll(async () => {
    await module.close();
  });

  it('connects to PostgreSQL', async () => {
    const result = await prisma.$queryRaw<{ ok: number }[]>`SELECT 1 as ok`;
    expect(result[0]?.ok).toBe(1);
  });
});
