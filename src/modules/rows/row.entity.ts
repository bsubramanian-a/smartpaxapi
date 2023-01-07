import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';

@Table
export class Row extends Model<Row> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    order: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    group_id: number;   
}