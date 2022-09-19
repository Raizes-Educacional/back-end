import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import multer from 'multer';
import ValidationPipeConfig from './config/ValidationPipeConfig';
import SwaggerConfig from './config/SwaggerConfig';
import * as dotenv from 'dotenv';
//Imports

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, SwaggerConfig);

  SwaggerModule.setup('api', app, document);
  //Swagger Call and Settings

  app.useGlobalPipes(ValidationPipeConfig);
  //Class-validator settings for API data insertion

  app.enableCors();
  //Cors Call

  await app.listen(process.env.PORT);
}
bootstrap();
