import { envSchema } from './env.schema.js';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from './env.service.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: env => envSchema.parse(env),
      isGlobal: true,
      envFilePath: [
        '.env',
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.development',
      ],
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
