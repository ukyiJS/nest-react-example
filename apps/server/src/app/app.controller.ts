import { AppService } from './app.service.js';
import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
