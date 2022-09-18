import { Test, TestingModule } from '@nestjs/testing';
import { VoluntarioController } from './voluntary.controller';
import { VoluntarioService } from './voluntary.service';

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
