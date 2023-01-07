import { Module } from '@nestjs/common';
import { DefaultcolumnstatusService } from './defaultcolumnstatus.service';

@Module({
  providers: [DefaultcolumnstatusService]
})
export class DefaultcolumnstatusModule {}
