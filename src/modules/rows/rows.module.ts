import { Module } from '@nestjs/common';
import { RowsService } from './rows.service';

@Module({
  providers: [RowsService]
})
export class RowsModule {}
