import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthResponseDto } from './dto/health-response.dto';
import { HealthService } from './health.service';

@ApiTags('health')
@Controller({ path: 'health', version: VERSION_NEUTRAL })
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({ summary: 'Health check' })
  @ApiResponse({ status: 200, type: HealthResponseDto })
  check(): Promise<HealthResponseDto> {
    return this.healthService.check();
  }
}
