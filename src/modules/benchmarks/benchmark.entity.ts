import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { ChartSetting } from '../chartsettings/chartsetting.entity';


@Table
export class Benchmark extends Model<Benchmark> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value: string;

    //--------------------many to one
    @ForeignKey(() => ChartSetting)
    @Column
    chart_setting_id: number;

    @BelongsTo(() => ChartSetting)
    chart_setting:ChartSetting
    //--------------------

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    label: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    color_code: string;

}