import { Module } from '@nestjs/common';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioController } from './voluntario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Voluntario from './entities/voluntario.entity';
import { AuthenticationVoluntarioService } from './authentication/authentication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Voluntario])],
  controllers: [VoluntarioController],
  providers: [VoluntarioService, AuthenticationVoluntarioService],
  exports: [VoluntarioService],
})
export class VoluntarioModule {}
