import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.enableCors({origin:"http://127.0.0.1:5500",credentials:true,})
  
  await app.listen(4000);


}
bootstrap();
