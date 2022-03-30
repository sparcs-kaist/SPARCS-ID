import { registerAs } from '@nestjs/config';

// .env로부터 불러온 환경변수를 모듈 형식으로 반환합니다.

export default registerAs('mysql', () => ({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}));
