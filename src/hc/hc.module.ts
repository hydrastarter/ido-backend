import {Module} from '@nestjs/common';
import {ApiResponseHandler} from 'src/utils/api';
import {HcController} from "./hc.controller";

@Module({
  imports: [],
  controllers: [HcController],
  providers: [
    ApiResponseHandler,
  ],
})
export class HcModule {}
