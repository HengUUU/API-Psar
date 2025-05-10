import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";

import { District } from "./district.model";
@Table({ 
    tableName: 'City',
    freezeTableName: true,
    underscored : true, 
})
export class City extends Model {
    @Column({ type: DataType.STRING, allowNull: false, unique: true })              declare name: string;

    //=============================================================================>relationships
    @HasMany(() => District)                                                        declare districts: District[];
}

