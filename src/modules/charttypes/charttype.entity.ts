import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { ChartCategory } from '../chartcategories/chartcatagory.entity';
import { Chart } from '../charts/chart.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';
import { User } from '../users/user.entity';

@Table
export class ChartType extends Model<ChartType> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type_name: string;

    //--------------------many to one
    @ForeignKey(() => ChartCategory)
    @Column
    category_id: number;

    @BelongsTo(() => ChartCategory)
    category:ChartCategory
    //--------------------

    @HasMany(() => Chart)
    charts: Chart[]

}