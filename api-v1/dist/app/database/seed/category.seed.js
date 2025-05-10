"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySeeder = void 0;
const category_model_1 = require("../../models/store/category.model");
class CategorySeeder {
    static seed = async () => {
        try {
            await this.seedInventory();
        }
        catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Locations store', err);
        }
    };
    static async seedInventory() {
        try {
            await category_model_1.Category.bulkCreate(categories);
            console.log("Sucessfully seeded location stores to database");
        }
        catch (err) {
            console.log("Problem when seeding Store", err);
        }
    }
}
exports.CategorySeeder = CategorySeeder;
const categories = [
    { id: 1, name: 'បន្លែ' },
    { id: 2, name: 'ផ្លែឈើ' },
    { id: 3, name: "សាច់" },
    { id: 4, name: "ស៊ុត" },
];
//# sourceMappingURL=category.seed.js.map