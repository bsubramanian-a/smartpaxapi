import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumnstatusService } from './defaultcolumnstatus.service';

describe('DefaultcolumnstatusService', () => {
  let service: DefaultcolumnstatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultcolumnstatusService],
    }).compile();

    service = module.get<DefaultcolumnstatusService>(DefaultcolumnstatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
