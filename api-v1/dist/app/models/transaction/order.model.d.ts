import { Model } from "sequelize-typescript";
import User from "../user/user.model";
export declare class Order extends Model {
    quantity: number;
    orderStatus: number;
    user: User;
}
