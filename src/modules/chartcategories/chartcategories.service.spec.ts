import { Test, TestingModule } from '@nestjs/testing';
import { ChartcategoriesService } from './chartcategories.service';

describe('ChartcategoriesService', () => {
  let service: ChartcategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChartcategoriesService],
    }).compile();

    service = module.get<ChartcategoriesService>(ChartcategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
