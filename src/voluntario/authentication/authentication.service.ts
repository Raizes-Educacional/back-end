import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

import { CreateVoluntarioDto } from '../dto/create-voluntario.dto';
import { VoluntarioService } from '../voluntario.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';

enum PostgresErrorCode {
  UniqueViolation = '23505',
}
@Injectable()
export class AuthenticationVoluntarioService {
  constructor(
    private readonly voluntarioService: VoluntarioService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(registration: CreateVoluntarioDto) {
    //========================================================================
    //                 Using script to encrypt the user's password
    //=======================================================================

    const emailExists = await this.voluntarioService.verifyIfExists(
      registration.email,
    );

    if (emailExists) {
      const ErrorEmailExists = {
        Error: 'Voluntario with that email already exists',
      };
      return ErrorEmailExists;
    } else {
      const hashedPassword = bcrypt.hashSync(registration.password, 10);

      try {
        const createVoluntario = await this.voluntarioService.createVoluntario({
          username: registration.username,
          email: registration.email,
          password: hashedPassword,
          birth: registration.birth,
        });
        const returnVoluntario = {
          message: 'User resgistracion was a success',
        };

        return returnVoluntario;
      } catch (erro) {
        throw new HttpException(
          'Error:' + erro,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  private async verifyPassword(hashedPassword: string, userComparae: string) {
    //=======================================================================
    //   compares the user's typed password with the
    //   encrypted one registered in the db
    //=======================================================================
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
    //==============================================================================
    // Method that checks the password, and generates JWT, through a private key
    //==============================================================================

    try {
      let user: any;

      // Verify email exist
      const QueryUser = await this.voluntarioService
        .getByEmail(email)
        // Transform string in json, atribut in user
        .then((res) => (user = JSON.stringify(res)));

      user = JSON.parse(user);
      const passwordCompare = await this.verifyPassword(
        user.password,
        password,
      );
      if (passwordCompare) {
        // Generaite JWT, case ok
        const payload = {
          id: user.id,
          email: user.email,
        };
        return {
          statusCode: 200,
          message: 'User autheticantion sucess',
          token: this.jwtService.sign(payload),
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
