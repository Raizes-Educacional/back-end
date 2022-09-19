import { ValidationPipe } from '@nestjs/common';

export default new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  })

