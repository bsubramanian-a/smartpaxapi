import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';

@Table
export class GColumn extends Model<GColumn> {
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

    @Column({
        type: DataType.INTEGER,
        unique:true,
        allowNull: false,
    })
    order: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_visible: boolean;

    //--------------------one to one
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------

}