import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './client/client.module';
import * as dotenv from 'dotenv';
import { AdminModule } from './admin/admin.module';

import Responsible from './client/responsible/entities/responsible.entity';
import Student from './client/student/entities/student.entity';
import Voluntary from './admin/voluntary/entities/voluntary.entity';
//Imports

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      synchronize: true,
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Voluntary, Student, Responsible],
    }),
    AdminModule,
    ClientModule,
    //Connection settings with typeorm
  ],
  controllers: [],
})
export class AppModule {}
