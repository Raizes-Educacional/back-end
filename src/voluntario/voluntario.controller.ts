import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthenticationVoluntarioService } from './authentication/authentication.service';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { UpdateVoluntarioDto } from './dto/update-voluntario.dto';
import { LoginVoluntarioDto } from './dto/login-voluntario.dto';

@Controller('voluntario')
export class VoluntarioController {
  constructor(
    private readonly voluntarioAuthentication: AuthenticationVoluntarioService,
  ) {}

  @Post('/register')
  register(@Body() createVoluntarioDto: CreateVoluntarioDto) {
    return this.voluntarioAuthentication.register(createVoluntarioDto);
  }

  @Post('/login')
  login(@Body() loginVoluntarioDto: LoginVoluntarioDto) {
    return this.voluntarioAuthentication.getAuthenticatedVoluntario(
      loginVoluntarioDto.email,
      loginVoluntarioDto.password,
    );
  }
}
