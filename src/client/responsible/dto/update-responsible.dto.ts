import { PartialType } from '@nestjs/mapped-types';
import { CreateResponsibleDto } from './create-responsible.dto';
import { IsString, IsNumber, IsDate, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class UpdateResponsibleDto extends CreateResponsibleDto {
    
}
