import { ApiProperty } from '@nestjs/swagger';

export class LoginVoluntarioDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
