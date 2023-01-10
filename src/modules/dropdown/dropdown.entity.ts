import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { BelongsToMany } from 'sequelize-typescript/dist/associations/belongs-to-many/belongs-to-many';
import { CDropdown } from '../columndropdowns/columndropdown.entity';
import { GColumn } from '../columns/column.entity';
import { DColumnDropdown } from '../defaultcolumndropdowns/defaultcolumndropdown.entity';
import { Group } from '../groups/group.entity';
import { GRow } from '../rows/row.entity';
import { User } from '../users/user.entity';

@Table
export class Dropdown extends Model<Dropdown> {

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

    //----------------------many to many
    @BelongsToMany(() => GColumn, () => CDropdown)
    CDropdowns: GColumn[];
    //--------------------

    //----------------------many to many
    @BelongsToMany(() => GColumn, () => DColumnDropdown)
    dcdropdowns: GColumn[];
    //--------------------
    
}