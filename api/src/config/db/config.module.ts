import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { MySqlConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

// 환경변수 관련해 어떤 클래스들을 불러오고 제공할지 명시합니다.
// Joi를 사용하여 환경변수가 정해진 형식에 맞는지 검증합니다.
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MYSQL_HOST: Joi.string(),
        MYSQL_USER: Joi.string(),
        MYSQL_PASSWORD: Joi.string(),
        MYSQL_PORT: Joi.number().default(3306),
      }),
    }),
  ],
  providers: [ConfigService, MySqlConfigService],
  exports: [ConfigService, MySqlConfigService],
})
export class MySqlConfigModule {}
