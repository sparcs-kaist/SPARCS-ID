import { Injectable } from '@nestjs/common';
import { AppConfigService } from './config/app/config.service';

@Injectable()
export class AppService {
  constructor(private readonly appConfig: AppConfigService) {}

  getHello(): string {
    return `Hello, world!\nRunning on port ${this.appConfig.port}.`;
  }
}
