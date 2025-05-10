import { ProductCategory } from "src/app/models/store/productCategory.model";

export class ProductCategorySeeder{
    public static seed = async () => {
        try {
            await this.seedInventory();
        } catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Locations store', err)
        }
    }

    private static async seedInventory(){
        try {
            await ProductCategory.bulkCreate(ProductCategories);
            console.log("Sucessfully seeded location stores to database");
        } catch (err) {
            console.log("Problem when seeding Store", err);
        }
    }
} 

const ProductCategories = [
    { id: 1, product_id: 1, category_id: 2 },
    { id: 2, product_id: 2, category_id: 1 },
    { id: 3, product_id: 3, category_id: 3 },
    { id: 4, product_id: 4, category_id: 4 },
    { id: 5, product_id: 5, category_id: 1 },
    { id: 6, product_id: 6, category_id: 2 },
    { id: 7, product_id: 7, category_id: 3 },
    { id: 8, product_id: 8, category_id: 4 },
    { id: 9, product_id: 9, category_id: 1 },
    { id: 10, product_id: 10, category_id: 2 },
    { id: 11, product_id: 11, category_id: 3 },
    { id: 12, product_id: 12, category_id: 4 },
    { id: 13, product_id: 13, category_id: 1 },
    { id: 14, product_id: 14, category_id: 2 },
    { id: 15, product_id: 15, category_id: 3 },
    { id: 16, product_id: 16, category_id: 4 },
    { id: 17, product_id: 17, category_id: 1 },
    { id: 18, product_id: 18, category_id: 2 },
    { id: 19, product_id: 19, category_id: 3 },
    { id: 20, product_id: 20, category_id: 4 },
    { id: 21, product_id: 21, category_id: 1 },
    { id: 22, product_id: 22, category_id: 2 },
    { id: 23, product_id: 23, category_id: 3 },
    { id: 24, product_id: 24, category_id: 4 },
    { id: 25, product_id: 25, category_id: 1 },
    { id: 26, product_id: 26, category_id: 2 },
    { id: 27, product_id: 27, category_id: 3 },
    { id: 28, product_id: 28, category_id: 4 },
    { id: 29, product_id: 29, category_id: 1 },
    { id: 30, product_id: 30, category_id: 2 },
    { id: 31, product_id: 31, category_id: 3 },
    { id: 32, product_id: 32, category_id: 4 },
    { id: 33, product_id: 33, category_id: 1 },
    { id: 34, product_id: 34, category_id: 2 },
    { id: 35, product_id: 35, category_id: 3 },
    { id: 36, product_id: 36, category_id: 4 },
    { id: 37, product_id: 37, category_id: 1 },
    { id: 38, product_id: 38, category_id: 2 },
    { id: 39, product_id: 39, category_id: 3 },
    { id: 40, product_id: 40, category_id: 4 },
    { id: 41, product_id: 41, category_id: 1 },
    { id: 42, product_id: 42, category_id: 2 },
    { id: 43, product_id: 43, category_id: 3 },
    { id: 44, product_id: 44, category_id: 4 },
    { id: 45, product_id: 45, category_id: 1 },
    { id: 46, product_id: 46, category_id: 2 },
    { id: 47, product_id: 47, category_id: 3 },
    { id: 48, product_id: 48, category_id: 4 },
    { id: 49, product_id: 49, category_id: 1 },
    { id: 50, product_id: 50, category_id: 2 }
];
  