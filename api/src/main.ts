import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppConfigService } from './config/app/config.service';
import * as session from 'express-session';

async function bootstrap() {
  // Nest 어플리케이션을 생성합니다.
  const app = await NestFactory.create(AppModule);

  // 환경변수 서비스를 로드합니다.
  const appConfig: AppConfigService = app.get(AppConfigService);

  // API 설명 페이지를 생성합니다. 이는 /api 페이지에서 확인할 수 있습니다. (로컬 환경에선 localhost:8000/api)
  const config = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription('Sample API description')
    .setVersion('0.0.1')
    .addTag('sample')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // 사용자 정보를 저장하기 위해 세션을 사용합니다.
  app.use(
    session({
      secret: appConfig.sessionSecret,
      resave: false,
      saveUninitialized: false,
    }),
  );

  // 서버 포트를 지정합니다.
  await app.listen(appConfig.port);
}
bootstrap();
