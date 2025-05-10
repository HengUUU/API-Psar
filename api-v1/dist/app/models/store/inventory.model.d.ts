import { Model } from "sequelize-typescript";
import { Store } from "./store.model";
import { Product } from "./product.model";
export declare class Inventory extends Model {
    name: string;
    product: Product[];
    store_id: number;
    store: Store;
}
