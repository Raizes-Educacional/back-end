import { IsString, IsNumber, IsDate, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateResponsibleDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    rg: string;

    @ApiProperty()
    @IsString()
    url_document: string;

    @ApiProperty()
    @IsString()
    cell_phone: string;

    @ApiProperty()
    @IsString()
    cell_phone_alternative: string;
    
    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsBoolean()
    is_responsible_for_transport: boolean;

    @ApiProperty()
    @IsNumber()
    id_student: number
}
