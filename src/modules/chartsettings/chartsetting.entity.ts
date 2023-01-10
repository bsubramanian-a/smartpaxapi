import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BelongsToMany } from 'sequelize-typescript/dist/associations/belongs-to-many/belongs-to-many';
import { BelongsTo } from 'sequelize-typescript/dist/associations/belongs-to/belongs-to';
import { ForeignKey } from 'sequelize-typescript/dist/associations/foreign-key/foreign-key';
import { Benchmark } from '../benchmarks/benchmark.entity';
import { ChartCategory } from '../chartcategories/chartcatagory.entity';
import { Chart } from '../charts/chart.entity';
import { ChartSettingGroup } from '../chartsettinggroups/chartsettinggroup.entity';
import { Group } from '../groups/group.entity';
import { Item } from '../items/item.entity';

@Table
export class ChartSetting extends Model<ChartSetting> {

    //--------------------one to one
    @ForeignKey(() => Item)
    @Column
    item_id: number;

    @BelongsTo(() => Item)
    item:Item
    //--------------------

    //--------------------many to one
    @ForeignKey(() => Chart)
    @Column
    chart_id: number;

    @BelongsTo(() => Chart)
    chart:Chart
    //--------------------

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    xaxis: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    yaxis: string;

    @Column({
        type: DataType.ENUM,
        values: ['folder', 'dashboard','dataset','workspace','chart'],
        allowNull: false,
    })
    calculation: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_position: boolean;

    @Column({
        type: DataType.ENUM,
        values: ['bottom', 'top'],
        allowNull: false,
    })
    position_type: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    items_count: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_cumulative: boolean;

    @Column({
        type: DataType.ENUM,
        values: ['yasc', 'ydesc', 'xasc', 'xdesc'],
        allowNull: false,
    })
    sort_by: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_empty: boolean;

    @Column({
        type: DataType.ENUM,
        values: ['all', 'top', 'selected', 'null'],
        allowNull: false,
    })
    group_type: string;

    @HasMany(() => Benchmark)
    benchmarks: Benchmark[]

    //----------------------many to many
    @BelongsToMany(() => Group, () => ChartSettingGroup)
    groups: Group[];
    //--------------------

}