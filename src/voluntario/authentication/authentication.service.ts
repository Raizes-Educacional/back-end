import { CreateVoluntarioDto } from '../dto/create-voluntario.dto';
import { VoluntarioService } from '../voluntario.service';
import * as bcrypt from 'bcrypt';
import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { LoginVoluntarioDto } from '../dto/login-voluntario.dto';

enum PostgresErrorCode {
  UniqueViolation = '23505',
}
@Injectable()
export class AuthenticationVoluntarioService {
  constructor(private readonly voluntarioService: VoluntarioService) {}

  public async register(registration: CreateVoluntarioDto) {
    const hashedPassword = await bcrypt.hash(registration.password, 10);
    try {
      const createVoluntario = await this.voluntarioService.createVoluntario({
        ...registration,
        password: hashedPassword,
      });
      const returnVoluntario = {
        id: createVoluntario.id,
        name: createVoluntario.username,
        email: createVoluntario.email,
        nascimento: createVoluntario.nascimento,
      };

      return returnVoluntario;
    } catch (erro) {
      if (erro?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          'Voluntario with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went weong erro:' + erro,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async verifyPassword(hashedPassword: string, userComparae: string) {
    const isPasswordMatching = await bcrypt.compare(
      userComparae,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
    return isPasswordMatching;
  }

  public async getAuthenticatedVoluntario(email: string, password: string) {
    try {
      let user: any;
      const QueryUser = await this.voluntarioService
        .getByEmail(email)
        .then((res) => (user = JSON.stringify(res)));
      user = JSON.parse(user);
      const passwordCompare = await this.verifyPassword(
        user.password,
        password,
      );
      if (passwordCompare) {
        return {
          message: 'User login  witch sucess',
        };
      }
    } catch (erro) {
      throw new HttpException(
        'Wrong credentials provied',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
