import { Model } from "sequelize-typescript";
import { Commune } from "./commune.model";
export declare class Village extends Model {
    name: string;
    communeId: number;
    communeclear: Commune;
}
