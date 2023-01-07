import { Module } from '@nestjs/common';
import { DefaultcolumnpeopleService } from './defaultcolumnpeople.service';

@Module({
  providers: [DefaultcolumnpeopleService]
})
export class DefaultcolumnpeopleModule {}
