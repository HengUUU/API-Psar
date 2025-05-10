import { Model } from 'sequelize-typescript';
declare class Location extends Model {
    city: number;
    district: number;
    commune: number;
    village: number;
    store_id: number;
}
export default Location;
