import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { CDropdown } from '../columndropdowns/columndropdown.entity';
import { GColumn } from '../columns/column.entity';
import { Group } from '../groups/group.entity';
import { GRow } from '../rows/row.entity';
import { User } from '../users/user.entity';

@Table
export class DColumnStatus extends Model<DColumnStatus> {

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