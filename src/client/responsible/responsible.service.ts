import {
  HttpCode,
  HttpException,
  Injectable,
  Req,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import Responsible from './entities/responsible.entity';

@Injectable()
export class ResponsibleService {
  private FileRgImage:any;
  constructor(
    @InjectRepository(Responsible)
    private responsibleRespository: Repository<Responsible>, 
  ) {}

  setFileRgImage(value){
    return this.FileRgImage = value
  }
  getFileRgImage(){
    return this.FileRgImage
  }

  async findAll(): Promise<Responsible[]> {
    return await this.responsibleRespository.find();
  }

  async findOne(id: number): Promise<any> {
    try {
      const response = await this.responsibleRespository.findOneBy({ id });
      if (response === null) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException(
        'INTERNAL_SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async create(createResponsibleDto: CreateResponsibleDto) {
    try {
      /*==============================================================================
      ""NewREsponsible constant was created because it was not finding the id_student 
      property in the typeOrm, because in the entity we have to define the property 
      as Student, to refer to another table, however, in the database it is named id_student,
      so I created this object
      /*==============================================================================*/
      const NewResponsible: any = {
        name: createResponsibleDto.name,
        rg: createResponsibleDto.rg,
        url_document: createResponsibleDto.url_document,
        cell_phone: createResponsibleDto.cell_phone,
        cell_phone_alternative: createResponsibleDto.cell_phone_alternative,
        email: createResponsibleDto.email,
        is_responsible_for_transport:
          createResponsibleDto.is_responsible_for_transport,
        student: createResponsibleDto.id_student,
      };
      const Responsible = await this.responsibleRespository.create(
        NewResponsible,
      );
      await this.responsibleRespository.save(Responsible);
      return Responsible;
    } catch (error) {
      /*=========================================================================
            To use httpExection, always use throw in front, never return, 
            because when you use it, it doesn't change the status code
      ===========================================================================*/
      throw new HttpException(
        'INTERNAL_SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    id: number,
    updateResponsibleDto: UpdateResponsibleDto,
  ): Promise<any> {
    // Check if the responsible exists
    const ResponsibleExists: any = await this.findOne(id);
    if (ResponsibleExists === null) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    } else {
      try {
        //New object to set the student
        const NewResponsible: any = {
          name: updateResponsibleDto.name,
          rg: updateResponsibleDto.rg,
          url_document: updateResponsibleDto.url_document,
          cell_phone: updateResponsibleDto.cell_phone,
          cell_phone_alternative: updateResponsibleDto.cell_phone_alternative,
          email: updateResponsibleDto.email,
          is_responsible_for_transport:
            updateResponsibleDto.is_responsible_for_transport,
          student: id,
        };
        const response: any = await this.responsibleRespository.update(
          id,
          NewResponsible,
        );
        return response;
      } catch (e) {
        throw new HttpException('id_student not found', HttpStatus.NOT_FOUND);
      }
    }
  }

  async remove(id: number) {
    try {
      const response = this.responsibleRespository.delete(id);
      if (response === null) {
        throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
      }
      return response;
    } catch (error) {
      throw new HttpException(
        'NTERNAL_SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateImage(file) {
    this.setFileRgImage(file)
    return file
  }

}
