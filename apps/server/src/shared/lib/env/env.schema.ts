import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'], {
      message: 'NODE_ENV는 development, test, production 중 하나여야 합니다.',
    })
    .default('development')
    .describe('앱이 실행되는 환경(development, test, production)으로 기본값은 development입니다.'),
  PORT: z.coerce
    .number({
      message: 'PORT는 숫자여야 합니다.',
    })
    .positive({
      message: 'PORT는 양수여야 합니다.',
    })
    .max(65535, {
      message: 'PORT는 65535 이하의 값이어야 합니다.',
    })
    .optional()
    .default(3000)
    .describe('서버가 실행되는 포트 번호로 기본값은 3000입니다.'),
  DATABASE_URL: z
    .string({
      message: 'DATABASE_URL은 필수 입력 항목입니다.(MongoDB의 연결 URL)',
    })
    .url({
      message: 'DATABASE_URL은 유효한 URL 형식이어야 합니다.',
    })
    .min(3, {
      message: 'DATABASE_URL은 최소 3자 이상이어야 합니다.',
    })
    .describe('MongoDB의 연결 URL입니다.'),
});

export type Env = z.infer<typeof envSchema>;
