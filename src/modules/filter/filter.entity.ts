import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { GColumn } from '../columns/column.entity';
import { Item } from '../items/item.entity';

@Table
export class Filter extends Model<Filter> {
    @Column({
        type: DataType.ENUM,
        values: ['is', 'isnot','contains','doesntcontain'],
        allowNull: false,
    })
    condition_type: string;

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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value: string;
}