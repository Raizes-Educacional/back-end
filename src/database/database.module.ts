import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from '../voluntario/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      /*
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,*/
      host: 'localhost',
      username: 'postgres',
      password: 'example',
      database: 'raizes',
      entities,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
