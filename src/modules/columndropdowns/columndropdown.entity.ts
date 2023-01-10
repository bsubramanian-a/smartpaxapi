import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { GColumn } from '../columns/column.entity';
import { Group } from '../groups/group.entity';
import { GRow } from '../rows/row.entity';

@Table
export class CDropdown extends Model<CDropdown> {

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
    dropdown_id: number;

    @BelongsTo(() => Group)
    dropdown:Group
    //--------------------
   
}