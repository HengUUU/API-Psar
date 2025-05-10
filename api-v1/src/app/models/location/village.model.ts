import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Commune } from "./commune.model";


@Table({ 
    tableName: 'Village',
    freezeTableName: true,
    underscored : true,
})
export class Village extends Model {
    @Column({ type: DataType.STRING, allowNull: false, unique : true })                     declare name: string;

    @ForeignKey(() => Commune) @Column({ type: DataType.INTEGER, allowNull: false })       declare communeId: number;

    @BelongsTo(() => Commune)                                                              declare communeclear: Commune;
}
