import { Model } from "sequelize-typescript";
import { Inventory } from "./inventory.model";
import { Category } from "./category.model";
import { CartItem } from "../transaction/cartItem.model";
export declare class Product extends Model {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
    category: Category[];
    cartItem: CartItem[];
    inventory_id: number;
    inventory: Inventory;
}
