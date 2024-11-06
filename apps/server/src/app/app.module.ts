import { UserModule } from '@/features/user/user.module.js';
import { EnvModule } from '@/shared/lib/env/env.module.js';
import { PrismaModule } from '@/shared/lib/prisma/prisma.module.js';
import { StaticModule } from '@/shared/lib/static/static.module.js';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [
    EnvModule,
    PrismaModule,
    StaticModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
