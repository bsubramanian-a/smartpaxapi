import { Module } from '@nestjs/common';
import { DefaultcolumnsService } from './defaultcolumns.service';

@Module({
  providers: [DefaultcolumnsService]
})
export class DefaultcolumnsModule {}
