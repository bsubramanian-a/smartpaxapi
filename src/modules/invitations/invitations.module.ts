import { Module } from '@nestjs/common';
import { InvitationsService } from './invitations.service';

@Module({
  providers: [InvitationsService]
})
export class InvitationsModule {}
