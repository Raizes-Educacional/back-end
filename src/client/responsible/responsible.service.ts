import { HttpCode, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { number, object } from 'joi';
import { Repository } from 'typeorm';
import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import Responsible from './entities/responsible.entity';

@Injectable()
export class ResponsibleService {
  constructor(
    @InjectRepository(Responsible)
    private responsibleRespository: Repository<Responsible>,
  ){}


  async create(createResponsibleDto: CreateResponsibleDto) {
      try {
        const Responsible = await this.responsibleRespository.create(createResponsibleDto);
        await this.responsibleRespository.save(Responsible)
        return Responsible;
      } catch (error) {
        return error
      }
      
  }

  async findAll(): Promise<Responsible[]> {
    return await this.responsibleRespository.find();
  }

  async findOne(id: number): Promise<any>{
      return await this.responsibleRespository.findOneBy({ id })

  }

  async update(id: number, updateResponsibleDto: UpdateResponsibleDto) {
      this.findOne(id).then((e) => {
        if(e.length > 0){
          return "sadasd"
        }
        return "nada"
      }).catch( (e) => {
        return e
      })
  }

  remove(id: number) {
    return `This action removes a #${id} responsible`;
  }
}
