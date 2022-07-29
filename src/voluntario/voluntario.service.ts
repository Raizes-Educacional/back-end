import { Injectable } from '@nestjs/common';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { UpdateVoluntarioDto } from './dto/update-voluntario.dto';

@Injectable()
export class VoluntarioService {
  create(createVoluntarioDto: CreateVoluntarioDto) {
    return 'This action adds a new voluntario';
  }

  findAll() {
    return `This action returns all voluntario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voluntario`;
  }

  update(id: number, updateVoluntarioDto: UpdateVoluntarioDto) {
    return `This action updates a #${id} voluntario`;
  }

  remove(id: number) {
    return `This action removes a #${id} voluntario`;
  }
}
