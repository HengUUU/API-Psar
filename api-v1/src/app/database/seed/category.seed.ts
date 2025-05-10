import { Category } from "src/app/models/store/category.model";

export class CategorySeeder{
    public static seed = async () => {
        try {
            await this.seedInventory();
        } catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Locations store', err)
        }
    }

    private static async seedInventory(){
        try {
            await Category.bulkCreate(categories);
            console.log("Sucessfully seeded location stores to database");
        } catch (err) {
            console.log("Problem when seeding Store", err);
        }
    }
} 


const categories = [
    {id : 1, name: 'បន្លែ'},
    {id : 2, name: 'ផ្លែឈើ'},
    { id : 3, name: "សាច់"},
    { id : 4, name: "ស៊ុត"},
]