import { Module } from '@nestjs/common';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioController } from './voluntario.controller';

@Module({
  controllers: [VoluntarioController],
  providers: [VoluntarioService]
})
export class VoluntarioModule {}
