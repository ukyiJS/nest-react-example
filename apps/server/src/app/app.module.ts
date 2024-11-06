import { UserModule } from '@/features/user/user.module.js';
import { EnvModule } from '@/shared/libs/env/env.module.js';
import { PrismaModule } from '@/shared/libs/prisma/prisma.module.js';
import { StaticModule } from '@/shared/libs/static/static.module.js';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [EnvModule, PrismaModule, StaticModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
