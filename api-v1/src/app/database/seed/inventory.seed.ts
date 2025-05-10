import { Inventory } from "src/app/models/store/inventory.model";

export class InventorySeeder{
    public static seed = async () => {
        try {
            await this.seedInventory();
        } catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Locations store', err)
        }
    }

    private static async seedInventory(){
        try {
            await Inventory.bulkCreate(inventories);
            console.log("Sucessfully seeded location stores to database");
        } catch (err) {
            console.log("Problem when seeding Store", err);
        }
    }
} 

const inventories = [
    {id : 1, name: 'ឃ្លាំងស្តុកម្ហូបស្ងួត', store_id : 1},
    {id : 2, name: 'បន្លែ',         store_id : 1},
    {id : 3, name: 'ផ្លែឈើខ្ចី',      store_id : 1},
    {id : 4, name: 'បន្លែស្រស់',     store_id : 2},
    {id : 5, name: 'ផ្លែឈើលេខមួយ', store_id : 2}
]

// export class Inventory extends Model{
    
//     @Column({ type: DataType.STRING, allowNull: false, unique: true })                            name        : string;
//     @Column({ type: DataType.INTEGER, allowNull: false, unique: true })                           count       : number;

//     //========================================================================> relationship
//     @HasMany(() => Product, {foreignKey: 'inventory_id', as: 'product_id'})                       product     : Product[];
    
//     //========================================================================> ForeignKeys
//     @ForeignKey(() => Store)@Column({ type: DataType.INTEGER, allowNull: false })                  store_id     : number;
// }