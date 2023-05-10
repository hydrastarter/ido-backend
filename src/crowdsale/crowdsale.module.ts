import { Module } from '@nestjs/common';
import { CrowdsaleService } from './crowdsale.service';
import { CrowdsaleController } from './crowdsale.controller';
import { ApiResponseHandler } from 'src/utils/api';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrowdsaleRepository } from './repositories/crowdsale.repository';
import { Crowdsale } from './entities/crowdsale.entity';
import { provideCustomRepository } from './repositories/custom-repository.util';

@Module({
  imports: [TypeOrmModule.forFeature([Crowdsale])],
  controllers: [CrowdsaleController],
  providers: [
    provideCustomRepository(Crowdsale, CrowdsaleRepository),
    CrowdsaleService,
    ApiResponseHandler,
  ],
})
export class CrowdsaleModule {}
