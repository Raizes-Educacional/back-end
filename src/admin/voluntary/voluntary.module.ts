import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import Voluntary from './entities/voluntary.entity';
import { VoluntaryService } from './voluntary.service';
import { VoluntaryController } from './voluntary.controller';
import { AuthenticationVoluntaryService } from './authentication/authentication.service';
import * as dotenv from 'dotenv';
//imports

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([Voluntary]),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [VoluntaryController],
  providers: [VoluntaryService, AuthenticationVoluntaryService],
  exports: [VoluntaryService, JwtModule, AuthenticationVoluntaryService],
})
export class VoluntaryModule {}
