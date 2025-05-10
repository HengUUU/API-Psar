import { Table, Column, Model, DataType, BelongsTo, HasOne, ForeignKey } from 'sequelize-typescript';



//====================================================
import { City } from '../location/city.model';
import { District } from '../location/district.model';
import { Commune } from '../location/commune.model';
import { Village } from '../location/village.model';
import { Store } from '../store/store.model';

@Table({ 
    tableName: 'Location',
    freezeTableName: true, 
    underscored : true,
})
class Location extends Model{

    //========================================================================================> Foregin Keys
    // @HasOne (()=> City)
    @Column({ type: DataType.INTEGER, allowNull: false })                           city: number;
    // @HasOne (()=> District)
    @Column({ type: DataType.INTEGER, allowNull: false })                           district: number;
    // @HasOne (()=> Commune)
    @Column({ type: DataType.INTEGER, allowNull: false })                           commune: number;
    // @HasOne (()=> Village)
    @Column({ type: DataType.INTEGER, allowNull: true})                             village: number;


    @ForeignKey(() => Store) @Column({ type: DataType.INTEGER, allowNull : false})  store_id: number;
    // @BelongsTo(() => store) @Column({ type: DataType.INTEGER, allowNull: false })   store_id: number;  
}
export default Location;