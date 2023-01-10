import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { GColumn } from '../columns/column.entity';
import { Group } from '../groups/group.entity';
import { GRow } from '../rows/row.entity';

@Table
export class CValue extends Model<CValue> {

    //--------------------many to one
    @ForeignKey(() => GColumn)
    @Column
    column_id: number;

    @BelongsTo(() => GColumn)
    column:GColumn
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Group)
    @Column
    group_id: number;

    @BelongsTo(() => Group)
    group:Group
    //--------------------

    //--------------------many to one
    @ForeignKey(() => GRow)
    @Column
    row_id: number;

    @BelongsTo(() => GRow)
    row:GRow
    //--------------------

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value: string;

    
}