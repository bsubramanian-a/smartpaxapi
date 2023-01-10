import { Sequelize } from 'sequelize-typescript';
import { Invitation } from 'src/modules/invitations/invitation.entity';
import { InvitationItem } from 'src/modules/invitationitems/invitationitem.entity';
import { Item } from 'src/modules/items/item.entity';
import { User } from 'src/modules/users/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { UPermission } from 'src/modules/permission/permission.entity';
import { Benchmark } from 'src/modules/benchmarks/benchmark.entity';
import { ChartCategory } from 'src/modules/chartcategories/chartcatagory.entity';
import { Chart } from 'src/modules/charts/chart.entity';
import { ChartSettingGroup } from 'src/modules/chartsettinggroups/chartsettinggroup.entity';
import { ChartSetting } from 'src/modules/chartsettings/chartsetting.entity';
import { ChartType } from 'src/modules/charttypes/charttype.entity';
import { GColumn } from 'src/modules/columns/column.entity';
import { CDropdown } from 'src/modules/columndropdowns/columndropdown.entity';
import { CPeople } from 'src/modules/columnpeople/columnpeople.entity';
import { CStatus } from 'src/modules/columnstatuses/columnstatus.entity';
import { CValue } from 'src/modules/columnvalues/columnvalue.entity';
import { DColumnDropdown } from 'src/modules/defaultcolumndropdowns/defaultcolumndropdown.entity';
import { DColumnPeople } from 'src/modules/defaultcolumnpeople/defaultcolumnpeople.entity';
import { DColumnStatus } from 'src/modules/defaultcolumnstatus/defaultcolumnstatus.entity';
import { DColumn } from 'src/modules/defaultcolumns/defaultcolumn.entity';
import { Filter } from 'src/modules/filter/filter.entity';
import { Group } from 'src/modules/groups/group.entity';
import { GRow } from 'src/modules/rows/row.entity';
import { Sort } from 'src/modules/sort/sort.entity';
import { Dropdown } from 'src/modules/dropdown/dropdown.entity';

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
        sequelize.addModels([
         User, 
         Invitation, 
         InvitationItem, 
         Item, 
         UPermission, 
         Benchmark, 
         ChartCategory, 
         Chart, 
         ChartSettingGroup,
         ChartSetting,
         ChartType,
         GColumn,
         Dropdown,
         CDropdown,
         CPeople,
         CStatus,
         CValue,
         DColumnDropdown,
         DColumnPeople,
         DColumnStatus,
         DColumn,
         Filter,
         Group,
         GRow,
         Sort
      ]);
        await sequelize.sync();
        return sequelize;
    },
}];