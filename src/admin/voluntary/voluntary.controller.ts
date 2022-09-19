import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';

import { AuthenticationVoluntaryService } from './authentication/authentication.service';
import { VoluntaryService } from './voluntary.service';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { LoginVoluntaryDto } from './dto/login-voluntary.dto';
//imports

@Controller('voluntary')
export class VoluntaryController {
  constructor(
    private readonly voluntaryAuthentication: AuthenticationVoluntaryService,
    private readonly voluntaryService: VoluntaryService,
  ) {}
  //Call of the Services that will be used in that respective controller

  @Post('/register')
  register(@Body() createVoluntaryDto: CreateVoluntaryDto): Promise<object> {
    return this.voluntaryAuthentication.register(createVoluntaryDto);
  }
  //POST route dedicated to voluntary registration

  @Post('/login')
  @HttpCode(200)
  login(@Body() loginVoluntaryDto: LoginVoluntaryDto): Promise<object> {
    return this.voluntaryAuthentication.getAuthenticatedVoluntary(
      loginVoluntaryDto.email,
      loginVoluntaryDto.password,
    );
  }
  //POST route dedicated to voluntary login

  @Get('')
  findAll(): Promise<object> {
    return this.voluntaryService.getAll();
  }
  // GET route dedicated to returning all records from the voluntary table

  @Get(':id')
  findOneId(@Param('id') id: number): Promise<object> {
    return this.voluntaryService.getById(id);
  }
  // GET route dedicated to returning a voluntary table record from an Id

  @Get('/email/:email')
  findOneEmail(@Param('email') email: string): Promise<object> {
    return this.voluntaryService.getByEmail(email);
  }
  // GET route dedicated to returning a voluntary table record from an Email
}
