import { GLOBAL_PREFIX } from '@/shared/config/global-prefix.config.js';
import { EnvService } from '@/shared/lib/env/env.service.js';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module.js';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const env = app.get(EnvService);
  const port = env.get('PORT');

  app.setGlobalPrefix(GLOBAL_PREFIX);
  await app.listen(port);

  Logger.log(
    `🚀 Server running on http://localhost:${port}${GLOBAL_PREFIX}`,
    'Server',
  );
}
bootstrap();
