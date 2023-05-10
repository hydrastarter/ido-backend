import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Logger,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { CrowdsaleService } from './crowdsale.service';
import { CreateCrowdsaleDto } from './dto/create-crowdsale.dto';
import { UpdateCrowdsaleDto } from './dto/update-crowdsale.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('crowdsale')
@UseGuards(AuthGuard('basic'))
export class CrowdsaleController {
  private logger: Logger;

  constructor(private readonly crowdsaleService: CrowdsaleService) {
    this.logger = new Logger('CrowdsaleController', {
      timestamp: true,
    });
  }

  @Post('/')
  public async createCrowdsale(@Body() createCrowdsaleDto: CreateCrowdsaleDto) {
    this.logger.verbose('Create Crowdsale', createCrowdsaleDto);
    return this.crowdsaleService.createCrowdsale(createCrowdsaleDto);
  }

  @Get('/')
  public async getAllCrowdsales() {
    this.logger.verbose('Get All Crowdsales');
    return this.crowdsaleService.getAllCrowdsales();
  }

  @Get('/:id')
  public async getCrowdsale(@Param('id', new ParseUUIDPipe()) id: string) {
    this.logger.verbose('Get Crowdsale', id);
    return this.crowdsaleService.getCrowdsale(id);
  }

  @Patch('/')
  public async updateCrowdsale(@Body() updateCrowdsaleDto: UpdateCrowdsaleDto) {
    this.logger.verbose('Update Crowdsale', updateCrowdsaleDto);
    return this.crowdsaleService.updateCrowdsale(updateCrowdsaleDto);
  }
}
