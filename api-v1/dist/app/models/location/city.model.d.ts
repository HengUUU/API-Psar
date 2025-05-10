import { Model } from "sequelize-typescript";
import { District } from "./district.model";
export declare class City extends Model {
    name: string;
    districts: District[];
}
