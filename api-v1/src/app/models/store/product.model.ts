import { AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Inventory } from "./inventory.model";
import { Category } from "./category.model";
import { Cart } from "../transaction/cart.model";
import { CartItem } from "../transaction/cartItem.model";
import { ProductCategory } from "./productCategory.model";

@Table({
    tableName: 'product',
    underscored : true,
})

export class Product extends Model{
    @Column({ type: DataType.INTEGER, primaryKey : true, autoIncrement: true })                                             declare id: number;

    @Column({ type: DataType.STRING, allowNull: false})                            declare name           : string;
    @Column({ type: DataType.INTEGER, allowNull: false})                           declare price          : number;
    @Column({ type: DataType.TEXT, allowNull: false})                              declare description    : string;
    @Column({ type: DataType.INTEGER, allowNull: false})                           declare quantity       : number;

    //=======================================================================> Foreign Key
    @BelongsToMany(() => Category, {through : () => ProductCategory, foreignKey: 'product_id'})                                       category : Category[];
    @HasMany(() => CartItem, {foreignKey: 'product_id'})                  cartItem    : CartItem[]; 
    // @Column({ type: DataType.INTEGER, allowNull: false})               cartItem    : CartItem[];

    //=======================================================================> relationship
    @ForeignKey(() =>  Inventory) @Column({ type: DataType.INTEGER, allowNull: false})           inventory_id : number;
    // @BelongsTo(() => cart) @Column({type: DataType.INTEGER, allowNull: true})                   cart     : cart;

    @BelongsTo(() => Inventory)                                                                  inventory    : Inventory;
}