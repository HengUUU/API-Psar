"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seeder = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_config_1 = require("../../config/sequelize.config");
const user_seed_1 = require("./seed/user.seed");
const store_seed_1 = require("./seed/store.seed");
const address_seed_1 = require("./seed/address.seed");
const location_seed_1 = require("./seed/location.seed");
const product_seed_1 = require("./seed/product.seed");
const category_seed_1 = require("./seed/category.seed");
const productCategory_seed_1 = require("./seed/productCategory.seed");
const inventory_seed_1 = require("./seed/inventory.seed");
const cart_seed_1 = require("./seed/cart.seed");
const cartItem_seed_1 = require("./seed/cartItem.seed");
const payment_seed_1 = require("./seed/payment.seed");
class Seeder {
    sequelize;
    constructor() {
        this.sequelize = new sequelize_typescript_1.Sequelize(sequelize_config_1.default);
    }
    async dropandSeedDatabase() {
        await this.sequelize.sync({ force: true });
    }
    async seedAllTable() {
        try {
            await user_seed_1.UserSeeder.seed();
            await store_seed_1.StoreSeeder.seed();
            await address_seed_1.CitySeeder.seed();
            await location_seed_1.LocationSeeder.seed();
            await inventory_seed_1.InventorySeeder.seed();
            await product_seed_1.ProductSeeder.seed();
            await category_seed_1.CategorySeeder.seed();
            await productCategory_seed_1.ProductCategorySeeder.seed();
            await cartItem_seed_1.CartItemSeeder.seed();
            await cart_seed_1.CartSeeder.seed();
            await payment_seed_1.PaymentSeeder.seed();
            console.log('\x1b[32m%s\x1b[0m', 'Successfully Seed all data');
        }
        catch (err) {
            await this.handleSeedingError(err);
        }
    }
    async handleSeedingError(error) {
        console.log('\x1b[32m%s\x1b[0m', error.message);
        process.exit(0);
    }
    async startSeeding() {
        try {
            await this.dropandSeedDatabase();
            await this.seedAllTable();
        }
        catch (err) {
            await this.handleSeedingError(err);
        }
    }
}
exports.Seeder = Seeder;
const seeder = new Seeder();
seeder.startSeeding();
//# sourceMappingURL=seeder.js.map