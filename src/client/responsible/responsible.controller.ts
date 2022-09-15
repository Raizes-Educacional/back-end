import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { Request, Response } from 'express';
import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';

@Controller('responsible')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}

  @Post()
  create(@Body() createResponsibleDto: CreateResponsibleDto) {
    return this.responsibleService.create(createResponsibleDto);
  }

  @Get()
  findAll() {
    return this.responsibleService.findAll();
    //asd
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsibleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponsibleDto: UpdateResponsibleDto): Promise<void> {
    return  this.responsibleService.update(+id, updateResponsibleDto)
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsibleService.remove(+id);
  }
}
