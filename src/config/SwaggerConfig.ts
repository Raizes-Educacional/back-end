import { DocumentBuilder } from '@nestjs/swagger';
//Imports

export default new DocumentBuilder()
  .setTitle('Sistema-Chamada-Raizes')
  .setDescription('Sistema de chamadas')
  .setVersion('1.0')
  .addTag('app, chamada, raizes')
  .build();
//Swagger Settings
