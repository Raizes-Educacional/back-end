import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVoluntaryDto {
  @ApiProperty()
  @IsString()
  fullname: string;

  @ApiProperty()
  @IsString()
  cellphone: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  birthdate: Date;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;
}

//Dto responsible for defining the pattern and validating the data before being passed to the database
