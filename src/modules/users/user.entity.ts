import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';

@Table
export class User extends Model<User> {
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
}