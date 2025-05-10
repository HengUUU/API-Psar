import { BelongsTo, Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import User from "../user/user.model";
import { OrderStatus } from "../enum/order.enum";
import { CartItem } from "./cartItem.model";

@Table({
    tableName: 'Order',
    underscored : true,
})

export class Order extends Model{
    
    //Primary Key

    @Column({ type: DataType.NUMBER, allowNull: false, unique: true})                            quantity     : number;
    @Column({ type: DataType.ENUM(...Object.values(OrderStatus)), allowNull : false})            orderStatus  : number;

    
    //========================================================================================> Foreign Keys
    // @HasMany(() => orderitem) @Column({ type: DataType.INTEGER, allowNull : false})             declare product: product;

    //========================================================================================> relationship
    @BelongsTo(() => User) @Column({ type: DataType.INTEGER, allowNull : false})                 user: User;


}