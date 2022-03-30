import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MySqlConfigModule } from 'src/config/db/config.module';
import { MySqlConfigService } from 'src/config/db/config.service';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [MySqlConfigModule],
      useFactory: async (mysqlConfig: MySqlConfigService) => ({
        dialect: 'mysql',
        host: mysqlConfig.host,
        port: mysqlConfig.port,
        username: mysqlConfig.username,
        password: mysqlConfig.password,
        database: mysqlConfig.database,
        models: [],
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class MySqlProviderModule {}
