import { Module } from '@nestjs/common';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioController } from './voluntario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Voluntario from './entities/voluntario.entity';
import { AuthenticationVoluntarioService } from './authentication/authentication.service';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forFeature([Voluntario]),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [VoluntarioController],
  providers: [VoluntarioService, AuthenticationVoluntarioService],
  exports: [VoluntarioService, JwtModule, AuthenticationVoluntarioService],
})
export class VoluntarioModule {}
