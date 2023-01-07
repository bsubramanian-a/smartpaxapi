import { Module } from '@nestjs/common';
import { ColumnvaluesService } from './columnvalues.service';

@Module({
  providers: [ColumnvaluesService]
})
export class ColumnvaluesModule {}
