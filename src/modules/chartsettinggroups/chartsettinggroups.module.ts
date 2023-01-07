import { Module } from '@nestjs/common';
import { ChartsettinggroupsService } from './chartsettinggroups.service';

@Module({
  providers: [ChartsettinggroupsService]
})
export class ChartsettinggroupsModule {}
