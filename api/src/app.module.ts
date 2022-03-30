import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { MySqlConfigModule } from './config/db/config.module';

@Module({
  imports: [AppConfigModule, MySqlConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
