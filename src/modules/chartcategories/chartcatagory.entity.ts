import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { ChartType } from '../charttypes/charttype.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';
import { User } from '../users/user.entity';

@Table
export class ChartCategory extends Model<ChartCategory> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    category_name: string;

    @HasMany(() => ChartType)
    charttypes: ChartType[]

}