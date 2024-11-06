import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { z } from 'zod';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const { VITE_API_URL, VITE_PORT } = envSchema.parse(loadEnv(mode, process.cwd()));

  return {
    plugins: [
      react(),
      tsconfigPaths(),
    ],
    server: {
      port: VITE_PORT,
      proxy: {
        '/api': {
          target: VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
    preview: {
      port: VITE_PORT,
    },
  };
});

const envSchema = z.object({
  VITE_PORT: z.coerce
    .number({
      message: 'VITE_PORT는 숫자여야 합니다.',
    })
    .positive({
      message: 'VITE_PORT는 양수여야 합니다.',
    })
    .max(65535, {
      message: 'VITE_PORT는 65535 이하의 값이어야 합니다.',
    })
    .optional()
    .default(5173)
    .describe('서버가 사용할 포트 번호로, 기본값은 5173입니다.'),

  VITE_API_URL: z
    .string({
      message: 'VITE_API_URL은 필수 입력 항목입니다.',
    })
    .url({
      message: 'VITE_API_URL은 유효한 URL 형식이어야 합니다.',
    })
    .min(3, {
      message: 'VITE_API_URL은 최소 3자 이상이어야 합니다.',
    })
    .describe('API 서버의 기본 URL 주소입니다.'),
});
