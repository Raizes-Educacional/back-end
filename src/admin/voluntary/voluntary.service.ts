import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Voluntary from './entities/voluntary.entity';
import { Repository } from 'typeorm/repository/Repository';
//Imports

@Injectable()
export class VoluntaryService {
  constructor(
    @InjectRepository(Voluntary)
    private voluntaryRepository: Repository<Voluntary>,
  ) {}

  async verifyIfExists(email: string): Promise<boolean> {
    const user: object = await this.voluntaryRepository.findOneBy({ email });
    if (user) {
      return true;
    }
    return false;
  }
  //Check if a record exists from the "email" field returning true or false

  public createVoluntary(createVoluntaryDto: CreateVoluntaryDto) {
    const newVoluntary = this.voluntaryRepository.create(createVoluntaryDto);
    this.voluntaryRepository.save(newVoluntary);
    return newVoluntary;
  }
  //Receive data passed from a Dto and insert it into its respective Repository

  async getByEmail(email: string): Promise<object> {
    const user: object = await this.voluntaryRepository.findOneBy({ email });
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
    const user: object = await this.voluntaryRepository.findOneBy({ id });
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
    const Query: object = await this.voluntaryRepository.find();
    return Query;
  }
  //Returns all records from the Repository
}
