import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { CValue } from '../columnvalues/columnvalue.entity';
import { Group } from '../groups/group.entity';
import { Invitation } from '../invitations/invitation.entity';
import { Item } from '../items/item.entity';

@Table
export class GRow extends Model<GRow> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    order: number;

    //--------------------one to one
    @ForeignKey(() => Group)
    @Column
    group_id: number;

    @BelongsTo(() => Group)
    group:Group
    //--------------------

    @HasMany(() => CValue)
    cvalues: CValue[]
}