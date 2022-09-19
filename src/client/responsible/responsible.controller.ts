import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { ResponsibleService } from './responsible.service';
import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
//imports

@Controller('responsible')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}
  //Call of the Services that will be used in that respective controller

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.responsibleService.updateImage(file);
  }
  //POST route dedicated to Update the "RG" image of the Responsible

  @Post()
  create(@Body() createResponsibleDto: CreateResponsibleDto) {
    return this.responsibleService.create(createResponsibleDto);
  }
  //POST route dedicated to Responsible registration

  @Get()
  findAll() {
    return this.responsibleService.findAll();
  }
  // GET route dedicated to returning all records from the Responsible table

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsibleService.findOne(+id);
  }
  // GET route dedicated to returning a Responsible table record from an Id

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResponsibleDto: UpdateResponsibleDto,
  ): Promise<void> {
    return this.responsibleService.update(+id, updateResponsibleDto);
  }
  // PATCH route dedicated to update a Responsible's Record on the table,using his "id" as a parameter

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsibleService.remove(+id);
  }
  // DELETE route dedicated to Remove a Responsible's Record on the table,using his "id" as a parameter
}
