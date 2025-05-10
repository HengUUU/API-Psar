import { AllowNull, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Inventory } from "./inventory.model";
import Location from "../user/location.model";

@Table({
    tableName: 'store',
    freezeTableName: true,
    underscored : true,
})

export class Store extends Model{
    
    @Column({ type: DataType.STRING, allowNull: false, unique: true})                            name        : string;
    @Column({ type: DataType.STRING, allowNull: false, unique: true})                            phoneNumber : string;
    
    //=============================================================>Foreign Keys
    @HasOne(() => Location, { foreignKey: 'store_id', as : 'location_id'})                        location_id  : Location;
    @HasMany(()=> Inventory, { foreignKey: 'store_id', as : 'inventory_id'})                      inventory_id : Inventory[];
}