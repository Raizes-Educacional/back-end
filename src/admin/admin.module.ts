import { Module } from '@nestjs/common';
import { VoluntaryModule } from './voluntary/voluntary.module';
//Imports

@Module({
  imports: [VoluntaryModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AdminModule {}
