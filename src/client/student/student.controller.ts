import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
//Imports

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  //Call of the Services that will be used in that respective controller

  @HttpCode(201)
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
  //POST route dedicated to Student registration

  @Get()
  findAll() {
    return this.studentService.findAll();
  }
  // GET route dedicated to returning all records from the Student table

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }
  // GET route dedicated to returning a Student table record from an Id

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }
  // PATCH route dedicated to update a Student's Record on the table,using his "id" as a parameter

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
  // DELETE route dedicated to Remove a Student's Record on the table,using his "id" as a parameter
}
