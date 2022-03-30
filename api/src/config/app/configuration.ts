import { registerAs } from '@nestjs/config';

// .env로부터 불러온 환경변수를 모듈 형식으로 반환합니다.

export default registerAs('app', () => ({
  port: Number(process.env.API_PORT) || 8000,
  sessionSecret: process.env.API_SESSION_SECRET,
}));
