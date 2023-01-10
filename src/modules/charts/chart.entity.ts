import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { ChartCategory } from '../chartcategories/chartcatagory.entity';
import { ChartSetting } from '../chartsettings/chartsetting.entity';
import { ChartType } from '../charttypes/charttype.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';
import { User } from '../users/user.entity';

@Table
export class Chart extends Model<Chart> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    chart_name: string;

    //--------------------many to one
    @ForeignKey(() => ChartType)
    @Column
    chart_type: number;

    @BelongsTo(() => ChartType)
    category:ChartType
    //--------------------

    //--------------------one to one
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------

    @HasMany(() => ChartSetting)
    chart_settings: ChartSetting[]

}