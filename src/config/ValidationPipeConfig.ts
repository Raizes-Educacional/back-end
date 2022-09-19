import { ValidationPipe } from '@nestjs/common';
//Imports

export default new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
});
//Class Validation Settings
