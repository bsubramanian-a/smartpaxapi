import { Module } from '@nestjs/common';
import { ColumnpeopleService } from './columnpeople.service';

@Module({
  providers: [ColumnpeopleService]
})
export class ColumnpeopleModule {}
