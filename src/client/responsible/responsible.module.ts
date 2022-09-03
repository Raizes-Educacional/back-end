import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Responsible from './entities/responsible.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Responsible])],
  controllers: [ResponsibleController],
  providers: [ResponsibleService]
})

export class ResponsibleModule {}
