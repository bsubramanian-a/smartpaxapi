import { Module } from '@nestjs/common';
import { DropdownService } from './dropdown.service';

@Module({
  providers: [DropdownService]
})
export class DropdownModule {}
