import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Item } from '../items/item.entity';
import { User } from '../users/user.entity';
import { InvitationItem } from '../invitationitems/invitationitem.entity';

@Table
export class Invitation extends Model<Invitation> {
    @ForeignKey(() => User)
    @Column
    sender_id: number;

    @BelongsTo(() => User)
    sender:User

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    invitation_email: string;

    @Column({
        type: DataType.ENUM,
        values: ['write', 'read'],
        allowNull: false,
    })
    permission_type: string;

    @BelongsToMany(() => Item, () => InvitationItem)
    InvitationItems: InvitationItem[];
}

