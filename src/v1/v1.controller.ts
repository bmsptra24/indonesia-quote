import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service';
import { error } from 'console';

@Controller('v1')
export class V1Controller {
  constructor(private readonly appService: AppService) {}

  @Get()
  fail(): string {
    return 'add the /category';
  }

  @Get('all')
  all(): object {
    return this.appService.all();
  }

  @Get('random')
  random(): object {
    return this.appService.random();
  }

  @Get('daily')
  daily(): object {
    return this.appService.daily();
  }

  @Get(':id')
  id(@Param('id') id: number) {
    return this.appService.id(id);
  }
}
