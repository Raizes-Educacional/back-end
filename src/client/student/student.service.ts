import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import Student from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRespository: Repository<Student>
  ){}
  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  async findAll() {
    return await this.studentRespository.find();
  }

  async findOne(id: number) {
    try {
      const result = await this.studentRespository.findOneBy({id})
      if(result === null){
        throw new HttpException('not found', HttpStatus.NOT_FOUND)
      }
      return result
    } catch (error) {
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
