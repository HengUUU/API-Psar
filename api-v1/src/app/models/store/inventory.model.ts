import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Store } from "./store.model";
import { Product } from "./product.model";

@Table({
    tableName: 'inventory',
    underscored : true,
})

export class Inventory extends Model{
    
    @Column({ type: DataType.STRING, allowNull: false, unique: true })                              name        : string;
    // @Column({ type: DataType.INTEGER, allowNull: false, unique: true })                           count       : number;

    //========================================================================> relationship
    @HasMany(() => Product, {foreignKey: 'inventory_id', as: 'product_id'})                         product     : Product[];
    
    //========================================================================> ForeignKeys
    @ForeignKey(() => Store)@Column({ type: DataType.INTEGER, allowNull: false })                   store_id     : number;

    @BelongsTo(() => Store)                                                                         store         : Store;
}