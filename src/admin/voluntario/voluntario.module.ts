import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import Voluntario from './entities/voluntario.entity';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioController } from './voluntario.controller';
import { AuthenticationVoluntarioService } from './authentication/authentication.service';
import * as dotenv from 'dotenv';
//imports

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([Voluntario]),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [VoluntarioController],
  providers: [VoluntarioService, AuthenticationVoluntarioService],
  exports: [VoluntarioService, JwtModule, AuthenticationVoluntarioService],
})
export class VoluntarioModule {}
