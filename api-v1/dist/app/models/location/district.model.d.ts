import { Model } from "sequelize-typescript";
import { City } from "./city.model";
import { Commune } from "./commune.model";
export declare class District extends Model {
    name: string;
    cityId: number;
    city: City;
    communes: Commune[];
}
