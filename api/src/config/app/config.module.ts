import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

// 환경변수 관련해 어떤 클래스들을 불러오고 제공할지 명시합니다.
// Joi를 사용하여 환경변수가 정해진 형식에 맞는지 검증합니다.
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        API_PORT: Joi.number().default(8000),
        API_SESSION_SECRET: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
