import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// 환경변수와 관련된 연산을 담당하는 서비스
@Injectable()
export class MySqlConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('mysql.host');
  }

  get port(): number {
    return this.configService.get<number>('mysql.port');
  }

  get username(): string {
    return this.configService.get<string>('mysql.username');
  }

  get password(): string {
    return this.configService.get<string>('mysql.password');
  }

  get database(): string {
    return this.configService.get<string>('mysql.database');
  }
}
