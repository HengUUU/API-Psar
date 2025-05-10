import { Model } from "sequelize-typescript";
import { Product } from "./product.model";
export declare class Category extends Model {
    name: string;
    products: Product[];
}
