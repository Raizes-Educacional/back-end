import { Module } from '@nestjs/common';
import { VoluntaryModule } from './voluntary/voluntary.module';

@Module({
  imports: [VoluntaryModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AdminModule {}
