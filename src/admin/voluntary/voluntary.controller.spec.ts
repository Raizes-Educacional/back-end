import { Test, TestingModule } from '@nestjs/testing';
import { VoluntaryController } from './voluntary.controller';
import { VoluntaryService } from './voluntary.service';

describe('VoluntaryController', () => {
  let controller: VoluntaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoluntaryController],
      providers: [VoluntaryService],
    }).compile();

    controller = module.get<VoluntaryController>(VoluntaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
