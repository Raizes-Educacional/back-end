import { PartialType } from '@nestjs/mapped-types';
import { CreateVoluntarioDto } from './create-voluntary.dto';

export class UpdateVoluntarioDto extends PartialType(CreateVoluntarioDto) {
  id: number;
}
