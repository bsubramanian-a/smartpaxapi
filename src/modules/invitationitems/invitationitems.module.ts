import { Module } from '@nestjs/common';
import { InvitationitemsService } from './invitationitems.service';

@Module({
  providers: [InvitationitemsService]
})
export class InvitationitemsModule {}
