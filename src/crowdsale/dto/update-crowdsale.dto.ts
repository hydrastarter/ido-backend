import { PartialType } from '@nestjs/mapped-types';
import { CreateCrowdsaleDto } from './create-crowdsale.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateCrowdsaleDto extends PartialType(CreateCrowdsaleDto) {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;
}
