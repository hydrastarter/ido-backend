import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

export class InputTokenDto {
  @IsNotEmpty()
  @IsString()
  inputTokenName: string;

  @IsNotEmpty()
  @IsString()
  inputTokenSymbol: string;

  @IsNotEmpty()
  @IsNumber()
  inputTokenDecimals: number;

  @IsNotEmpty()
  @IsString()
  inputTokenAddress: string;
}

//All fields exactly as sent to smart contract
export class CreateCrowdsaleDto {
  @IsNotEmpty()
  @IsString()
  crowdsaleAddress: string;

  @IsNotEmpty()
  @IsString()
  tokenName: string;

  @IsNotEmpty()
  @IsString()
  tokenSymbol: string;

  @IsNotEmpty()
  @IsNumber()
  tokenDecimals: number;

  @IsNotEmpty()
  @IsString()
  tokenAddress: string;

  @IsNotEmpty()
  @IsString()
  tokenImageUrl: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  twitterUrl: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  telegramUrl: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  websiteUrl: string;

  @IsOptional()
  @IsString()
  miscellaneousUrl: string;

  @IsOptional()
  @IsString()
  description: string;

  //Should be with token decimals
  @IsNotEmpty()
  @IsString()
  crowdsaleTokenAllocated: string;

  //timestamp
  @IsNotEmpty()
  @IsString()
  crowdsaleStartTime: string;

  //timestamp
  @IsNotEmpty()
  @IsString()
  crowdsaleEndTime: string;

  //timestamp
  @IsNotEmpty()
  @IsString()
  vestingStart: string;

  //timestamp
  @IsNotEmpty()
  @IsString()
  vestingEnd: string;

  @IsNotEmpty()
  @IsString()
  cliffDuration: string;

  @IsNotEmpty()
  @IsString()
  minimumTokenSaleAmount: string;

  @IsNotEmpty()
  @IsString()
  maxUserAllocation: string;

  @IsNotEmpty()
  @IsString()
  inputTokenRate: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @IsObject({ each: true })
  @Type(() => InputTokenDto)
  inputTokens: InputTokenDto[];

  @IsNotEmpty()
  @IsBoolean()
  isVerified: boolean;
}
