import { Test, TestingModule } from '@nestjs/testing';
import { VoluntaryService } from './voluntary.service';

describe('VoluntaryService', () => {
  let service: VoluntaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoluntaryService],
    }).compile();

    service = module.get<VoluntaryService>(VoluntaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
