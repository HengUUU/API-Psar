import { Model } from "sequelize-typescript";
import { CartItem } from "./cartItem.model";
import { Payment } from "./payment.model";
export declare class Cart extends Model {
    id: number;
    is_ordered: boolean;
    total: number;
    user_id: number;
    cart_item: CartItem[];
    payment: Payment;
}
