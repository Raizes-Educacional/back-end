import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { VoluntarioModule } from './voluntario/voluntario.module';
import { DatabaseModule } from './database/database.module';
import * as Joi from '@hapi/joi';
@Module({
  imports: [
    VoluntarioModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.number().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
