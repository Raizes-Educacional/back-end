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

import { AuthenticationVoluntarioService } from './authentication/authentication.service';
import { VoluntarioService } from './voluntario.service';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { LoginVoluntarioDto } from './dto/login-voluntario.dto';
//imports

@Controller('voluntario')
export class VoluntarioController {
  constructor(
    private readonly voluntarioAuthentication: AuthenticationVoluntarioService,
    private readonly voluntarioService: VoluntarioService,
  ) {}
  //Call of the Services that will be used in that respective controller

  @Post('/register')
  register(@Body() createVoluntarioDto: CreateVoluntarioDto): Promise<object> {
    return this.voluntarioAuthentication.register(createVoluntarioDto);
  }
  //POST route dedicated to voluntario registration

  @Post('/login')
  @HttpCode(200)
  login(@Body() loginVoluntarioDto: LoginVoluntarioDto): Promise<object> {
    return this.voluntarioAuthentication.getAuthenticatedVoluntario(
      loginVoluntarioDto.email,
      loginVoluntarioDto.password,
    );
  }
  //POST route dedicated to voluntario login

  @Get('')
  findAll(): Promise<object> {
    return this.voluntarioService.getAll();
  }
  // GET route dedicated to returning all records from the voluntario table

  @Get(':id')
  findOneId(@Param('id') id: number): Promise<object> {
    return this.voluntarioService.getById(id);
  }
  // GET route dedicated to returning a voluntario table record from an Id

  @Get('/email/:email')
  findOneEmail(@Param('email') email: string): Promise<object> {
    return this.voluntarioService.getByEmail(email);
  }
  // GET route dedicated to returning a voluntario table record from an Email
}
