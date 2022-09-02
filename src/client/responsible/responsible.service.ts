import { Injectable } from '@nestjs/common';
import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';

@Injectable()
export class ResponsibleService {
  create(createResponsibleDto: CreateResponsibleDto) {
    return 'This action adds a new responsible';
  }

  findAll() {
    return `This action returns all responsible`;
  }

  findOne(id: number) {
    return `This action returns a #${id} responsible`;
  }

  update(id: number, updateResponsibleDto: UpdateResponsibleDto) {
    return `This action updates a #${id} responsible`;
  }

  remove(id: number) {
    return `This action removes a #${id} responsible`;
  }
}
