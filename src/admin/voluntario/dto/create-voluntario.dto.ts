import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVoluntarioDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  birth: string;
}

//Dto responsible for defining the pattern and validating the data before being passed to the database
