import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';
import { User } from '../users/user.entity';

@Table
export class UPermission extends Model<UPermission> {
    //--------------------many to one
    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User)
    user:User
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------

    @Column({
        type: DataType.ENUM,
        values: ['write','read'],
        allowNull: false,
    })
    permission_type: string;

}