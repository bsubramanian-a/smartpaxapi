import { Module } from '@nestjs/common';
import { ColumndropdownsService } from './columndropdowns.service';

@Module({
  providers: [ColumndropdownsService]
})
export class ColumndropdownsModule {}
