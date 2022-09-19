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
    private studentRespository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = await this.studentRespository.create(createStudentDto);
    return this.studentRespository.save(student);
  }

  async findAll() {
    return await this.studentRespository.find();
  }

  async findOne(id: number) {
    try {
      const result = await this.studentRespository.findOneBy({ id });
      if (result === null) {
        throw new HttpException('not found', HttpStatus.NOT_FOUND);
      }
      return result;
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    try {
      const result = await this.findOne(+id);
      return this.studentRespository.update(+id, updateStudentDto);
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      return await this.studentRespository.delete(id);
    } catch (erro) {
      throw new HttpException(`${erro}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
