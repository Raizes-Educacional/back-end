import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Responsible from './entities/responsible.entity';
import { MulterModule } from '@nestjs/platform-express';
//imports

@Module({
  imports: [
    TypeOrmModule.forFeature([Responsible]),
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [ResponsibleController],
  providers: [ResponsibleService],
})
export class ResponsibleModule {}
