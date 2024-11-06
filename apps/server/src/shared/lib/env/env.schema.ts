import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().positive()
    .max(65536)
    .optional()
    .default(3000),
  DATABASE_URL: z
    .string({
      description: 'MongoDB Connection url',
    })
    .url()
    .min(3),
});

export type Env = z.infer<typeof envSchema>;
