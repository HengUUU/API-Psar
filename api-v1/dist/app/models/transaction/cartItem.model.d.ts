import { Model } from "sequelize-typescript";
import { Product } from "../store/product.model";
import { Cart } from "./cart.model";
export declare class CartItem extends Model {
    id: number;
    quantity: number;
    cart_id: number;
    product_id: number;
    cart: Cart;
    product: Product;
}
