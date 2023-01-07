import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';

@Table
export class Sort extends Model<Sort> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    column_id: number;

    @Column({
        type: DataType,
        allowNull: false,
    })
    item_id: number;

    @Column({
        type: DataType.ENUM,
        values: ['admin', 'user'],
        allowNull: false,
    })
    user_type: string;
}