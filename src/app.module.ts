import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';

import { VoluntarioModule } from './voluntario/voluntario.module';

import entities from './voluntario/entities';

@Module({
  imports: [
    VoluntarioModule,
    VoluntarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'raizes',
      entities,
      synchronize: true,

      /*
      Não está funcionando, sei lá pq
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities,
      synchronize: true,
*/
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
