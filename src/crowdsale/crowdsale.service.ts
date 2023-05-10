import { Injectable, Logger } from '@nestjs/common';
import { CreateCrowdsaleDto } from './dto/create-crowdsale.dto';
import { UpdateCrowdsaleDto } from './dto/update-crowdsale.dto';
import { ApiResponseHandler } from 'src/utils/api';
import { IApiResponse } from 'src/utils/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { CrowdsaleRepository } from './repositories/crowdsale.repository';
import { Crowdsale } from './entities/crowdsale.entity';

@Injectable()
export class CrowdsaleService {
  private logger: Logger;

  constructor(
    @InjectRepository(Crowdsale)
    private crowdsaleRepository: CrowdsaleRepository,
    private apiResponseHandler: ApiResponseHandler,
  ) {
    this.logger = new Logger('CrowdsaleService', {
      timestamp: true,
    });
  }

  public async createCrowdsale(
    createCrowdsaleDto: CreateCrowdsaleDto,
  ): Promise<IApiResponse<Crowdsale>> {
    try {
      const crowdsale = await this.crowdsaleRepository.createCrowdsale(
        createCrowdsaleDto,
      );
      return this.apiResponseHandler.handleSuccess('Success', crowdsale);
    } catch (error) {
      this.logger.error(error.message);
      return this.apiResponseHandler.handleFailed(error.message, error);
    }
  }

  public async getAllCrowdsales(): Promise<IApiResponse<Crowdsale[]>> {
    try {
      const crowdsales = await this.crowdsaleRepository.getAllCrowdsales();
      return this.apiResponseHandler.handleSuccess('Success', crowdsales);
    } catch (error) {
      this.logger.error(error.message);
      return this.apiResponseHandler.handleFailed(error.message, error);
    }
  }

  public async getCrowdsale(id: string): Promise<IApiResponse<Crowdsale>> {
    try {
      const crowdsale = await this.crowdsaleRepository.getCrowdsale(id);
      return this.apiResponseHandler.handleSuccess('Success', crowdsale);
    } catch (error) {
      this.logger.error(error.message);
      return this.apiResponseHandler.handleFailed(error.message, error);
    }
  }

  public async updateCrowdsale(
    updateCrowdsaleDto: UpdateCrowdsaleDto,
  ): Promise<IApiResponse<Crowdsale>> {
    try {
      const crowdsale = await this.crowdsaleRepository.updateCrowdsale(
        updateCrowdsaleDto,
      );
      return this.apiResponseHandler.handleSuccess('Success', crowdsale);
    } catch (error) {
      this.logger.error(error.message);
      return this.apiResponseHandler.handleFailed(error.message, error);
    }
  }
}
