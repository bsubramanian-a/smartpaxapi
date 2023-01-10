import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';

@Table
export class DColumn extends Model<DColumn> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    column_name: string;

    @Column({
        type: DataType.ENUM,
        values: ['text', 'integer','date','status','dropdown','people','formula'],
        allowNull: false,
    })
    datatype: string;
}