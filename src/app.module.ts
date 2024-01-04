import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrowdsaleModule } from './crowdsale/crowdsale.module';
import configuration, { Config } from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import {HcModule} from "./hc/hc.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => Config().database,
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    CrowdsaleModule,
    HcModule,
    AuthModule,
  ],
})
export class AppModule {}
