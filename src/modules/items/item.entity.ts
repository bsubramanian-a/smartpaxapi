import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Chart } from '../charts/chart.entity';
import { ChartSetting } from '../chartsettings/chartsetting.entity';
import { InvitationItem } from '../invitationitems/invitationitem.entity';
import { Invitation } from '../invitations/invitation.entity';
import { User } from '../users/user.entity';

@Table
export class Item extends Model<Item> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    //--------------------many to one
    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User)
    user:User
    //--------------------

    //--------------------one to one
    @ForeignKey(() => Item)
    @Column
    parent_id: number;

    @BelongsTo(() => Item)
    parent:Item
    //--------------------

    @Column({
        type: DataType.ENUM,
        values: ['folder', 'dashboard','dataset','workspace','chart'],
        allowNull: false,
    })
    item_type: string;

    //----------------------many to many
    @BelongsToMany(() => Invitation, () => InvitationItem)
    InvitationItems: Invitation[];
    //--------------------

    @HasMany(() => ChartSetting)
    chart_settings: ChartSetting[]

    @HasMany(() => Chart)
    charts: Chart[]

}