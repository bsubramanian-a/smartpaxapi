import { Module } from '@nestjs/common';
import { BenchmarksService } from './benchmarks.service';

@Module({
  providers: [BenchmarksService]
})
export class BenchmarksModule {}
