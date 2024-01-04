import {Controller, Get, UseGuards,} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Controller('hc')
@UseGuards(AuthGuard('basic'))
export class HcController {

  constructor() {
  }

  @Get('/')
  public async getHc() {
    return {ok:true};
  }

}
