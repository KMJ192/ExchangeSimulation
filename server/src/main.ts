import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
//import { GetRealTimeData } from './coin/get_data/GetCoinData';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.use(cookieParser()); //token 파싱
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials : true
  })
  await app.listen(8080);
}
bootstrap();

//GetRealTimeData();