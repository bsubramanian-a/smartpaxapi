import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { CDropdown } from '../columndropdowns/columndropdown.entity';
import { GColumn } from '../columns/column.entity';
import { Group } from '../groups/group.entity';
import { GRow } from '../rows/row.entity';
import { User } from '../users/user.entity';

@Table
export class DColumnPeople extends Model<DColumnPeople> {

    //--------------------many to one
    @ForeignKey(() => GColumn)
    @Column
    column_id: number;

    @BelongsTo(() => GColumn)
    column:GColumn
    //--------------------

    //--------------------many to one
    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User)
    user:User
    //--------------------

    
    
}