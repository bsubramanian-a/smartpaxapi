import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { BelongsToMany } from 'sequelize-typescript/dist/associations/belongs-to-many/belongs-to-many';
import { ChartSettingGroup } from '../chartsettinggroups/chartsettinggroup.entity';
import { ChartSetting } from '../chartsettings/chartsetting.entity';
import { CValue } from '../columnvalues/columnvalue.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';
import { GRow } from '../rows/row.entity';

@Table
export class Group extends Model<Group> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    //--------------------one to one
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------

    @HasMany(() => CValue)
    cvalues: CValue[]

    @HasMany(() => GRow)
    grows: GRow[]

    //----------------------many to many
    @BelongsToMany(() => ChartSetting, () => ChartSettingGroup)
    chartsettings: ChartSetting[];
    //--------------------

}