import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';

import { InjectRepository } from '@nestjs/typeorm';
import Voluntario from './entities/voluntario.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class VoluntarioService {
  constructor(
    @InjectRepository(Voluntario)
    private voluntarioRepository: Repository<Voluntario>,
  ) {}

  public createVoluntario(createVoluntarioDto: CreateVoluntarioDto) {
    const newVoluntraio = this.voluntarioRepository.create(createVoluntarioDto);
    this.voluntarioRepository.save(newVoluntraio);
    return newVoluntraio;
  }
  async getByEmail(email: string) {
    const user: object = await this.voluntarioRepository.findOneBy({ email });
    if (user) {
      return user;
    }
    return new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
}
