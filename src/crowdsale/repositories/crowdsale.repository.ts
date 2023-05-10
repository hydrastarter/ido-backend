import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { Crowdsale } from '../entities/crowdsale.entity';
import { CreateCrowdsaleDto } from '../dto/create-crowdsale.dto';
import { UpdateCrowdsaleDto } from '../dto/update-crowdsale.dto';

export class CrowdsaleRepository extends Repository<Crowdsale> {
  private logger = new Logger('CrowdsaleRepository');

  async createCrowdsale(
    createCrowdsaleDto: CreateCrowdsaleDto,
  ): Promise<Crowdsale> {
    return await this.save(createCrowdsaleDto);
  }

  async getAllCrowdsales(): Promise<Crowdsale[]> {
    return this.find();
  }

  async getCrowdsale(id: string): Promise<Crowdsale> {
    return this.findOne({ where: { id } });
  }

  async updateCrowdsale(
    updateCrowdsaleDto: UpdateCrowdsaleDto,
  ): Promise<Crowdsale> {
    const crowdsale = await this.getCrowdsale(updateCrowdsaleDto.id);
    if (crowdsale) {
      return await this.save({ ...crowdsale, ...updateCrowdsaleDto });
    }
    return crowdsale;
  }
}
