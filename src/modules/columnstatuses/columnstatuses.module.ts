import { Module } from '@nestjs/common';
import { ColumnstatusesService } from './columnstatuses.service';

@Module({
  providers: [ColumnstatusesService]
})
export class ColumnstatusesModule {}
