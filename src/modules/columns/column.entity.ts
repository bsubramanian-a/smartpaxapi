import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { BelongsToMany } from 'sequelize-typescript/dist/associations/belongs-to-many/belongs-to-many';
import { CDropdown } from '../columndropdowns/columndropdown.entity';
import { CPeople } from '../columnpeople/columnpeople.entity';
import { CStatus } from '../columnstatuses/columnstatus.entity';
import { CValue } from '../columnvalues/columnvalue.entity';
import { DColumnDropdown } from '../defaultcolumndropdowns/defaultcolumndropdown.entity';
import { DColumnPeople } from '../defaultcolumnpeople/defaultcolumnpeople.entity';
import { DColumnStatus } from '../defaultcolumnstatus/defaultcolumnstatus.entity';
import { Dropdown } from '../dropdown/dropdown.entity';
import { Filter } from '../filter/filter.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';
import { Sort } from '../sort/sort.entity';
import { User } from '../users/user.entity';

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

    @HasMany(() => CValue)
    cvalues: CValue[]

    @HasMany(() => CStatus)
    cstatus: CStatus[]

    @HasMany(() => DColumnStatus)
    dcstatus: DColumnStatus[]

    @HasMany(() => Sort)
    sorts: Sort[]

    @HasMany(() => Filter)
    filters: Filter[]

    //----------------------many to many
    @BelongsToMany(() => Dropdown, () => CDropdown)
    cdropdowns: Dropdown[];
    //--------------------

    //----------------------many to many
    @BelongsToMany(() => User, () => CPeople)
    cpeople: User[];
    //--------------------

    //----------------------many to many
    @BelongsToMany(() => User, () => DColumnPeople)
    dcpeople: User[];
    //--------------------

    //----------------------many to many
    @BelongsToMany(() => Dropdown, () => DColumnDropdown)
    dcdropdowns: Dropdown[];
    //--------------------

}