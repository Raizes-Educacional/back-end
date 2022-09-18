import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginVoluntarioDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}

//Dto responsible for defining the pattern and validating the data before being passed to the database
