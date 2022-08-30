import { Test, TestingModule } from '@nestjs/testing';
import { MatriculaController } from './matricula.controller';

describe('MatriculaController', () => {
  let controller: MatriculaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatriculaController],
    }).compile();

    controller = module.get<MatriculaController>(MatriculaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
