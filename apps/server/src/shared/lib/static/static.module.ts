import { GLOBAL_PREFIX } from '@/shared/config/global-prefix.config.js';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootPath = pathToFileURL(process.cwd());
const clientPath = new URL('./client/dist', rootPath);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: fileURLToPath(clientPath),
      exclude: [`${GLOBAL_PREFIX}*`],
    }),
  ],
})
export class StaticModule {}
