import { Module } from '@nestjs/common';
import { DefaultcolumndropdownsService } from './defaultcolumndropdowns.service';

@Module({
  providers: [DefaultcolumndropdownsService]
})
export class DefaultcolumndropdownsModule {}
