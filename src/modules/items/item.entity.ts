import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
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

    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User)
    user:User

    @ForeignKey(() => Item)
    @Column
    parent_id: number;

    @BelongsTo(() => Item)
    parent:Item

    @Column({
        type: DataType.ENUM,
        values: ['folder', 'dashboard','dataset','workspace','chart'],
        allowNull: false,
    })
    item_type: string;

    @BelongsToMany(() => Invitation, () => InvitationItem)
    InvitationItems: Invitation[];
}