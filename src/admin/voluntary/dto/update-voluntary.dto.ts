import { PartialType } from '@nestjs/mapped-types';
import { CreateVoluntaryDto } from './create-voluntary.dto';

export class UpdateVoluntaryDto extends PartialType(CreateVoluntaryDto) {
  id: number;
}
