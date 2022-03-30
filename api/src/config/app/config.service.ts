import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// 환경변수와 관련된 연산을 담당하는 서비스
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('app.port');
  }

  get sessionSecret(): string {
    return this.configService.get<string>('app.sessionSecret');
  }
}
