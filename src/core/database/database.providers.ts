import { Sequelize } from 'sequelize-typescript';
import { Invitation } from 'src/modules/invitations/invitation.entity';
import { InvitationItem } from 'src/modules/invitationitems/invitationitem.entity';
import { Item } from 'src/modules/items/item.entity';
import { User } from 'src/modules/users/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config.database!,config.username!, config.password, {
            host: config.host,
            dialect:'postgres',
            repositoryMode:true
            //dialect: config.dialect
        });
        sequelize.addModels([User, Invitation, InvitationItem, Item]);
        await sequelize.sync();
        return sequelize;
    },
}];