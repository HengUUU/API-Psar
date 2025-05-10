import { Model } from "sequelize-typescript";
import { Inventory } from "./inventory.model";
import Location from "../user/location.model";
export declare class Store extends Model {
    name: string;
    phoneNumber: string;
    location_id: Location;
    inventory_id: Inventory[];
}
