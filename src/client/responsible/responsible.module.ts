import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';

@Module({
  controllers: [ResponsibleController],
  providers: [ResponsibleService]
})
export class ResponsibleModule {}
