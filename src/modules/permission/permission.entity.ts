import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    item_id: number;

    @Column({
        type: DataType.ENUM,
        values: ['write','read'],
        allowNull: false,
    })
    ptype: string;

}