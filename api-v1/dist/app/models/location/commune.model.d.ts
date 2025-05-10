import { Model } from "sequelize-typescript";
import { District } from "./district.model";
import { Village } from "./village.model";
export declare class Commune extends Model {
    name: string;
    districtId: number;
    district: District;
    villages: Village[];
}
