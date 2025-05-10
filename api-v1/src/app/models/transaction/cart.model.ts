import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Product } from "../store/product.model";
import User from "../user/user.model";
import { CartItem } from "./cartItem.model";
import { OrderItem } from "sequelize";
import { Payment } from "./payment.model";

@Table({
    tableName: 'cart',
    underscored : true,
})

export class Cart extends Model{
    
    //Primary Key
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement : true})                  declare id          : number;

    @Column({ type: DataType.BOOLEAN})                                                          is_ordered      !: boolean;
    @Column({ type: DataType.INTEGER})                                                          declare total    : number;

    //========================================================================================> ForeignKey
    @ForeignKey(() => User) @Column({ type: DataType.INTEGER, allowNull : false})               user_id: number;
    
    @HasMany(() => CartItem, {foreignKey : 'cart_id'})                                          declare cart_item: CartItem[];
    @HasOne(() => Payment, {foreignKey: 'cart_id'})                                             declare payment  : Payment; 
}