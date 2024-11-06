import { Env } from './env.schema.js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService<Env>) {}

  get<T extends keyof Env>(key: T) {
    return this.configService.get(key, {
      infer: true,
    });
  }
}
