import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { GColumn } from '../columns/column.entity';

@Table
export class CStatus extends Model<CStatus> {

    //--------------------many to one
    @ForeignKey(() => GColumn)
    @Column
    column_id: number;

    @BelongsTo(() => GColumn)
    column:GColumn
    //--------------------

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value: string;

    @Column({
        type: DataType.STRING,        
        allowNull: false,
    })
    color_code: string;
}