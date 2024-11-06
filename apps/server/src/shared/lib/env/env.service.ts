import type { Env } from './env.schema.js';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  @Inject(ConfigService)
  private readonly configService: ConfigService<Env, true>;

  get<T extends keyof Env>(key: T) {
    return this.configService.get(key, {
      infer: true,
    });
  }
}
