import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { VoluntarioModule } from './voluntario/voluntario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import Voluntario from './voluntario/entities/voluntario.entity';
//Imports

dotenv.config();

@Module({
  imports: [
    VoluntarioModule,
    TypeOrmModule.forRoot({
      synchronize: true,
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Voluntario],
    }),
    //Connection settings with typeorm
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
