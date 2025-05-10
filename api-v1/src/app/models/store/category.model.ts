import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Inventory } from "./inventory.model";
import { Product } from "./product.model";
import { ProductCategory } from "./productCategory.model";

@Table({
    tableName: 'category',
    underscored : true,
})

export class Category extends Model{
    
    //Primary Key
    // @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement : true})                 id          : number;

    @Column({type: DataType.STRING, allowNull: false})                           name        : string;
    // @Column({type: DataType.STRING, allowNull: true, unique: true})                            description    : string;


    //========================================================================> Relationship
    @BelongsToMany(() =>  Product,  {through : () => ProductCategory, foreignKey: 'category_id'} )                    products : Product[];
    
}