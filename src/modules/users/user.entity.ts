import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsToMany } from 'sequelize-typescript/dist/associations/belongs-to-many/belongs-to-many';
import { CPeople } from '../columnpeople/columnpeople.entity';
import { GColumn } from '../columns/column.entity';
import { DColumnPeople } from '../defaultcolumnpeople/defaultcolumnpeople.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';
import { UPermission } from '../permission/permission.entity';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    user_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.ENUM,
        values: ['admin', 'user'],
        allowNull: false,
    })
    user_type: string;

    @HasMany(() => Invitation)
    invitations: Invitation[]

    @HasMany(() => Item)
    items: Item[]

    @HasMany(() => UPermission)
    permissions: UPermission[]

    //----------------------many to many
    @BelongsToMany(() => GColumn, () => CPeople)
    cpeople: GColumn[];
    //--------------------

    //----------------------many to many
    @BelongsToMany(() => GColumn, () => DColumnPeople)
    dcpeople: GColumn[];
    //--------------------
}