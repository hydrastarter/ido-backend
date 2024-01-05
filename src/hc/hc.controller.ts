import { Controller, Get } from '@nestjs/common';
import { ApiResponseHandler } from '../utils/api';

@Controller('hc')
export class HcController {
  private apiResponseHandler: ApiResponseHandler;

  @Get('/')
  public async getHc() {
    return {
      data: {
        network: process.env.NETWORK,
        name: process.env.npm_package_name,
        ver: process.env.npm_package_version,
      },
    };
  }
}
