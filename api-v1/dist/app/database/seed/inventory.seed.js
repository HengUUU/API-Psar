"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorySeeder = void 0;
const inventory_model_1 = require("../../models/store/inventory.model");
class InventorySeeder {
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
            await inventory_model_1.Inventory.bulkCreate(inventories);
            console.log("Sucessfully seeded location stores to database");
        }
        catch (err) {
            console.log("Problem when seeding Store", err);
        }
    }
}
exports.InventorySeeder = InventorySeeder;
const inventories = [
    { id: 1, name: 'ឃ្លាំងស្តុកម្ហូបស្ងួត', store_id: 1 },
    { id: 2, name: 'បន្លែ', store_id: 1 },
    { id: 3, name: 'ផ្លែឈើខ្ចី', store_id: 1 },
    { id: 4, name: 'បន្លែស្រស់', store_id: 2 },
    { id: 5, name: 'ផ្លែឈើលេខមួយ', store_id: 2 }
];
//# sourceMappingURL=inventory.seed.js.map