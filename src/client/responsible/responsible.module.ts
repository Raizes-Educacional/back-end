import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Responsible from './entities/responsible.entity';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [
  TypeOrmModule.forFeature([Responsible]), 
],
  controllers: [ResponsibleController],
  providers: []
})

export class ResponsibleModule {}
