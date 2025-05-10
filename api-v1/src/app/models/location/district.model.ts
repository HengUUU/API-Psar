import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";


import { City } from "./city.model";
import { Commune } from "./commune.model";

@Table({ 
    tableName: 'District', 
    underscored: true,
    freezeTableName: true,
})
export class District extends Model {

    @Column({ type: DataType.STRING, allowNull: false, unique : true})              declare name: string;

    @ForeignKey(() => City) @Column({ type: DataType.INTEGER, allowNull: false })   declare cityId: number;


    @BelongsTo(() => City)                                                          declare city: City;
    @HasMany(() => Commune)                                                         declare communes : Commune[];
}
