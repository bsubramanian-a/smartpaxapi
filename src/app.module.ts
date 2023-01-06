import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { InvitationsModule } from './modules/invitations/invitations.module';
import { ItemsModule } from './modules/items/items.module';
import { InvitationitemsModule } from './modules/invitationitems/invitationitems.module';


@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal:true}), UsersModule, InvitationsModule, ItemsModule, InvitationitemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
