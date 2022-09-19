import { IsString, IsDateString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDateString()
  birth: Date;

  @ApiProperty()
  @IsBoolean()
  has_special_needs: boolean;

  @ApiProperty()
  @IsString()
  cellphone: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  address_number: string;

  @ApiProperty()
  @IsString()
  zipcode: string;

  @ApiProperty()
  @IsString()
  complement: string;

  @ApiProperty()
  @IsString()
  district: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  school: string;

  @ApiProperty()
  @IsString()
  year_shool: string;

  @ApiProperty()
  @IsString()
  origin: string;

  @ApiProperty()
  @IsBoolean()
  has_online_disponibility: boolean;

  @ApiProperty()
  @IsBoolean()
  has_time_disponibility: boolean;
}
//Entity responsible for defining the formatting standard to be inserted in the database
