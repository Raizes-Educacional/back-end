import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Voluntario from './entities/voluntario.entity';
import { Repository } from 'typeorm/repository/Repository';
//Imports

@Injectable()
export class VoluntarioService {
  constructor(
    @InjectRepository(Voluntario)
    private voluntarioRepository: Repository<Voluntario>,
  ) {}

  async verifyIfExists(email: string): Promise<boolean> {
    const user: object = await this.voluntarioRepository.findOneBy({ email });
    if (user) {
      return true;
    }
    return false;
  }
  //Check if a record exists from the "email" field returning true or false

  public createVoluntario(createVoluntarioDto: CreateVoluntarioDto) {
    const newVoluntraio = this.voluntarioRepository.create(createVoluntarioDto);
    this.voluntarioRepository.save(newVoluntraio);
    return newVoluntraio;
  }
  // Receive data passed from a Dto and insert it into its respective Repository

  async getByEmail(email: string): Promise<object> {
    const user: object = await this.voluntarioRepository.findOneBy({ email });
    if (user) {
      return user;
    }
    return new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  //Returns a record corresponding to the "email" field

  async getById(id: number): Promise<object> {
    const user: object = await this.voluntarioRepository.findOneBy({ id });
    if (user) {
      return user;
    }
    return new HttpException(
      'User with this Id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
  //Returns a record corresponding to the "Id" field

  async getAll(): Promise<object> {
    const Query: object = await this.voluntarioRepository.find();
    return Query;
  }
  //Returns all records from the Repository
}
