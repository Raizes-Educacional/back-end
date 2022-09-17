import { Module } from '@nestjs/common';
import { ResponsibleModule } from './responsible/responsible.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ResponsibleModule, StudentModule]
})
export class ClientModule {}
