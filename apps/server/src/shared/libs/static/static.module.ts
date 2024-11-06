import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { fileURLToPath } from 'node:url';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: fileURLToPath(new URL('../../../../../client/dist', import.meta.url)),
      exclude: ['/api*'],
    }),
  ],
})
export class StaticModule {}
