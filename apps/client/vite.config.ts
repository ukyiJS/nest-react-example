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
  VITE_PORT: z.coerce.number()
    .positive()
    .max(65536)
    .optional()
    .default(5173),
  VITE_API_URL: z.string({
    description: 'The URL of the API server',
  })
    .url()
    .min(3),
});
