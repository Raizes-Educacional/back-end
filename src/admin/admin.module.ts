import { Module } from '@nestjs/common';
import { VoluntarioModule } from './voluntary/voluntary.module';

@Module({
    imports: [VoluntarioModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AdminModule {}
