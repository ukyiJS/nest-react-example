import { EnvService } from '@/shared/libs/env/env.service.js';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module.js';

const GLOBAL_PREFIX = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = app.get(EnvService);
  const port = env.get('PORT');

  app.setGlobalPrefix(GLOBAL_PREFIX);
  await app.listen(port);

  Logger.log(
    `🚀 Server running on http://localhost:${port}/${GLOBAL_PREFIX}`,
    'Server',
  );
}
bootstrap();
