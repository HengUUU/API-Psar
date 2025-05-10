import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";

import { Product } from "../store/product.model";
import { Order } from "./order.model";
import { Cart } from "./cart.model";

@Table({
    tableName: 'CartItem',
    underscored : true,
})

export class CartItem extends Model{
    

    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true})                     declare id: number;                             
    
    @Column({ type: DataType.INTEGER, allowNull: false})                                                        quantity : number;
    //========================================================================================> ForeignKey
    @ForeignKey(() => Cart) @Column({ type: DataType.INTEGER, allowNull: false,})                                cart_id: number;
    @ForeignKey(() => Product) @Column({ type: DataType.INTEGER, allowNull: false})                              product_id: number;

    @BelongsTo(() => Cart)                                                                                      declare cart : Cart
    @BelongsTo(() => Product)                                                                                   product : Product;
}

