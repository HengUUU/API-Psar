import { Model } from "sequelize-typescript";
export declare class ProductCategory extends Model {
    id: number;
    product_id: number;
    category_id: number;
}
