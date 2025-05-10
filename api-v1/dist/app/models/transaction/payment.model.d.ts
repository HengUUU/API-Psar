import { Model } from "sequelize-typescript";
import User from "../user/user.model";
import { Cart } from "./cart.model";
export declare class Payment extends Model {
    id: number;
    payment_type: string;
    payment_status: string;
    user_id: number;
    cart_id: number;
    user: User;
    cart: Cart;
}
