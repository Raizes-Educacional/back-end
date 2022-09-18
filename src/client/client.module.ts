import { Module } from '@nestjs/common';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ResponsibleModule } from './responsible/responsible.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ResponsibleModule, StudentModule, NestjsFormDataModule]
})
export class ClientModule {}
