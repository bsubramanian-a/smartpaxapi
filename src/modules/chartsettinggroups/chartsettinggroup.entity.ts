import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { ChartCategory } from '../chartcategories/chartcatagory.entity';
import { ChartSetting } from '../chartsettings/chartsetting.entity';
import { Group } from '../groups/group.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';
import { User } from '../users/user.entity';

@Table
export class ChartSettingGroup extends Model<ChartSettingGroup> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type_name: string;

    //--------------------many to one
    @ForeignKey(() => ChartSetting)
    @Column
    setting_id: number;

    @BelongsTo(() => ChartSetting)
    setting:ChartSetting
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Group)
    @Column
    group_id: number;

    @BelongsTo(() => Group)
    group:Group
    //--------------------

}