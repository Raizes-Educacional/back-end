import { Test, TestingModule } from '@nestjs/testing';
import { VoluntarioController } from './voluntario.controller';
import { VoluntarioService } from './voluntario.service';

describe('VoluntarioController', () => {
  let controller: VoluntarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoluntarioController],
      providers: [VoluntarioService],
    }).compile();

    controller = module.get<VoluntarioController>(VoluntarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
