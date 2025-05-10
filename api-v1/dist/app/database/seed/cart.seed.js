"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSeeder = void 0;
const cart_model_1 = require("../../models/transaction/cart.model");
class CartSeeder {
    static seed = async () => {
        try {
            await this.seedInventory();
        }
        catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Cart', err);
        }
    };
    static async seedInventory() {
        try {
            await cart_model_1.Cart.bulkCreate(carts);
            console.log("Sucessfully seeded location stores to database");
        }
        catch (err) {
            console.log("Problem when seeding Cart", err);
        }
    }
}
exports.CartSeeder = CartSeeder;
const carts = [
    { 'id': 1, 'is_ordered': true, 'user_id': 1, 'total': 80000 },
    { 'id': 2, 'is_ordered': true, 'user_id': 1, 'total': 30000 },
    { 'id': 3, 'is_ordered': false, 'user_id': 1, 'total': 20000 }
];
//# sourceMappingURL=cart.seed.js.map