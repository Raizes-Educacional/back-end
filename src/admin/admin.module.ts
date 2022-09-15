import { Module } from '@nestjs/common';
import { VoluntarioModule } from './voluntario/voluntario.module';

@Module({
    imports: [VoluntarioModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AdminModule {}
