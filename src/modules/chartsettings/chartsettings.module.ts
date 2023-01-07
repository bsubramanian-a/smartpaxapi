import { Module } from '@nestjs/common';
import { ChartsettingsService } from './chartsettings.service';

@Module({
  providers: [ChartsettingsService]
})
export class ChartsettingsModule {}
