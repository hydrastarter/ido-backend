import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Config from './config/configuration';
import { GlobalHttpResponseInterceptor } from './utils/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new GlobalHttpResponseInterceptor());
  await app.listen(Config().port);
  console.log('ido backend listening port=',Config().port);
}
bootstrap();
