import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

import { CreateVoluntaryDto } from '../dto/create-voluntary.dto';
import { VoluntaryService } from '../voluntary.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
//imports

enum PostgresErrorCode {
  UniqueViolation = '23505',
}
@Injectable()
export class AuthenticationVoluntaryService {
  constructor(
    private readonly voluntaryService: VoluntaryService,
    private readonly jwtService: JwtService,
  ) {}
  //Call of the Respectives Services that will be in use

  public async register(registration: CreateVoluntaryDto) {
    //========================================================================
    //                 Using script to encrypt the user's password
    //=======================================================================

    const emailExists = await this.voluntaryService.verifyIfExists(
      registration.email,
    );
    //Checks if the email sent to the registration is already present in the database

    if (emailExists) {
      const ErrorEmailExists = {
        Error: 'Voluntaryy with that email already exists',
      };
      return ErrorEmailExists;
      //Returns an Error Reporting Duplicate registry and Preventing The registry Creation
    } else {
      const hashedPassword = bcrypt.hashSync(registration.password, 10);
      //Encrypt password using bcrypt

      try {
        const createVoluntary = await this.voluntaryService.createVoluntary({
          fullname: registration.fullname,
          email: registration.email,
          password: hashedPassword,
          birthdate: registration.birthdate,
          cellphone: registration.cellphone,
          city: registration.city,
          state: registration.state,
        });
        //Registry Creation
        const returnVoluntary = {
          message: 'User resgistracion was a success',
        };
        return returnVoluntary;
        //Returns a Sucess Message
      } catch (erro) {
        throw new HttpException(
          'Error:' + erro,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
        //Returns an error message if it has any
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

  public async getAuthenticatedVoluntary(email: string, password: string) {
    //==============================================================================
    // Method that checks the password, and generates JWT, through a private key
    //==============================================================================

    try {
      let user: any;

      // Verify email exist
      const QueryUser = await this.voluntaryService
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
