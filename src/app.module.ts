import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';

import { VoluntarioModule } from './voluntario/voluntario.module';

import entities from './voluntario/entities';

@Module({
  imports: [VoluntarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
