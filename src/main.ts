import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
//Imports

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  //Class-validator settings for API data insertion

  app.enableCors();
  //Cors Call

  const config = new DocumentBuilder()
    .setTitle('Sistema-Chamada-Raizes')
    .setDescription('Sistema de chamadas')
    .setVersion('1.0')
    .addTag('app, chamada, raizes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //Swagger Call and Settings

  await app.listen(process.env.PORT);
}
bootstrap();
