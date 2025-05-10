import { AllowNull, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";

import { Product } from "../store/product.model";
import { Order } from "./order.model";
import User from "../user/user.model";
import { PaymentType } from "../enum/paymenttype.enum";
import { PaymentStatus } from "../enum/paymentstatus.enum";
import { Cart } from "./cart.model";

@Table({
    tableName: 'payment',
    underscored : true,
})

export class Payment extends Model{
    
    //Primary Key
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement : true})                  declare id: number;

    @Column({ type: DataType.ENUM(...Object.values(PaymentType))})                              payment_type    : string;
    @Column({ type: DataType.ENUM(...Object.values(PaymentStatus))})                            payment_status  : string;


    //========================================================================================> Relationship
    @ForeignKey(() => User) @Column({ type: DataType.INTEGER, allowNull: false})                                         user_id : number;
    @ForeignKey(() => Cart) @Column({ type: DataType.INTEGER, allowNull: false})                                        cart_id : number;

    @BelongsTo(() => User)                                                                                              user    : User;
    @BelongsTo(() => Cart)                                                                                              cart    : Cart;
}