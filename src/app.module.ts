import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { InvitationsModule } from './modules/invitations/invitations.module';
import { ItemsModule } from './modules/items/items.module';
import { InvitationitemsModule } from './modules/invitationitems/invitationitems.module';
import { GroupsModule } from './modules/groups/groups.module';
import { ColumnsModule } from './modules/columns/columns.module';
import { DefaultcolumnsModule } from './modules/defaultcolumns/defaultcolumns.module';
import { ColumnstatusesModule } from './modules/columnstatuses/columnstatuses.module';
import { ColumnvaluesModule } from './modules/columnvalues/columnvalues.module';
import { RowsModule } from './modules/rows/rows.module';
import { ColumndropdownsModule } from './modules/columndropdowns/columndropdowns.module';
import { ColumnpeopleModule } from './modules/columnpeople/columnpeople.module';
import { DefaultcolumndropdownsModule } from './modules/defaultcolumndropdowns/defaultcolumndropdowns.module';
import { DefaultcolumnpeopleModule } from './modules/defaultcolumnpeople/defaultcolumnpeople.module';
import { DefaultcolumnstatusModule } from './modules/defaultcolumnstatus/defaultcolumnstatus.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';
import { SortModule } from './modules/sort/sort.module';
import { FilterModule } from './modules/filter/filter.module';
import { PermissionModule } from './modules/permission/permission.module';
import { ChartcategoriesService } from './modules/chartcategories/chartcategories.service';
import { ChartcategoriesModule } from './modules/chartcategories/chartcategories.module';
import { CharttypesService } from './modules/charttypes/charttypes.service';
import { CharttypesModule } from './modules/charttypes/charttypes.module';
import { ChartsModule } from './modules/charts/charts.module';
import { ChartsettingsModule } from './modules/chartsettings/chartsettings.module';
import { ChartsettinggroupsModule } from './modules/chartsettinggroups/chartsettinggroups.module';
import { BenchmarksModule } from './modules/benchmarks/benchmarks.module';
@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal:true}), UsersModule, InvitationsModule, ItemsModule, InvitationitemsModule, GroupsModule, ColumnsModule, DefaultcolumnsModule, ColumnstatusesModule, ColumnvaluesModule, RowsModule, ColumndropdownsModule, ColumnpeopleModule, DefaultcolumndropdownsModule, DefaultcolumnpeopleModule, DefaultcolumnstatusModule, DropdownModule, SortModule, FilterModule, PermissionModule, ChartcategoriesModule, CharttypesModule, ChartsModule, ChartsettingsModule, ChartsettinggroupsModule, BenchmarksModule
],
  controllers: [AppController],
  providers: [AppService, ChartcategoriesService, CharttypesService],
})
export class AppModule {}
