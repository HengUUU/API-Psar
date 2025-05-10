import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";

import { District } from "./district.model";
import { Village } from "./village.model";

@Table({ 
    tableName: 'Commune',
    freezeTableName: true,
    underscored : true,
})
export class Commune extends Model {
    @Column({ type: DataType.STRING, allowNull: false, unique : true })                             declare name: string;

    @ForeignKey(() => District) @Column({ type: DataType.INTEGER, allowNull: false })               declare districtId: number;

    //=============================================================================>relationships
    @BelongsTo(() => District)                                                                      declare district: District;
    @HasMany(() => Village)                                                                         declare villages : Village[];
}
