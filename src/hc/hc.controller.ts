import {Controller, Get} from '@nestjs/common';
import {ApiResponseHandler} from '../utils/api';

@Controller('hc')
export class HcController {
  private apiResponseHandler: ApiResponseHandler;

  @Get('/')
  public async getHc() {
    return {
      data: {
        network: process.env.NETWORK,
        ver: process.env.npm_package_version,
      },
    };
  }
}
