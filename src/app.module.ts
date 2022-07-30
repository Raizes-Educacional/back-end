import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';

import { VoluntarioModule } from './voluntario/voluntario.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [VoluntarioModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
