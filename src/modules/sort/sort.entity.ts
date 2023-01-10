import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { GColumn } from '../columns/column.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';

@Table
export class Sort extends Model<Sort> {
    @Column({
        type: DataType.ENUM,
        values: ['asc', 'desc'],
        allowNull: false,
    })
    sort_type: string;

    //--------------------many to one
    @ForeignKey(() => GColumn)
    @Column
    column_id: number;

    @BelongsTo(() => GColumn)
    column:GColumn
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------
}