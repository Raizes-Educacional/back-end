import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VoluntarioService } from './voluntario.service';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { UpdateVoluntarioDto } from './dto/update-voluntario.dto';

@Controller('voluntario')
export class VoluntarioController {
  constructor(private readonly voluntarioService: VoluntarioService) {}

  @Post()
  create(@Body() createVoluntarioDto: CreateVoluntarioDto) {
    return this.voluntarioService.create(createVoluntarioDto);
  }

  @Get()
  findAll() {
    return this.voluntarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voluntarioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVoluntarioDto: UpdateVoluntarioDto,
  ) {
    return this.voluntarioService.update(+id, updateVoluntarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voluntarioService.remove(+id);
  }
}
