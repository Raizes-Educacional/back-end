import { ApiProperty } from '@nestjs/swagger';

export class CreateVoluntarioDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  birth: string;
}
