"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const user_model_1 = require("../app/models/user/user.model");
const district_model_1 = require("../app/models/location/district.model");
const commune_model_1 = require("../app/models/location/commune.model");
const city_model_1 = require("../app/models/location/city.model");
const village_model_1 = require("../app/models/location/village.model");
const location_model_1 = require("../app/models/user/location.model");
const store_model_1 = require("../app/models/store/store.model");
const inventory_model_1 = require("../app/models/store/inventory.model");
const product_model_1 = require("../app/models/store/product.model");
const category_model_1 = require("../app/models/store/category.model");
const productCategory_model_1 = require("../app/models/store/productCategory.model");
const cart_model_1 = require("../app/models/transaction/cart.model");
const cartItem_model_1 = require("../app/models/transaction/cartItem.model");
const payment_model_1 = require("../app/models/transaction/payment.model");
dotenv.config();
const sequelizeConfig = {
    dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    models: [user_model_1.default, district_model_1.District, commune_model_1.Commune,
        city_model_1.City, village_model_1.Village, location_model_1.default,
        store_model_1.Store, inventory_model_1.Inventory, product_model_1.Product,
        category_model_1.Category, productCategory_model_1.ProductCategory, cart_model_1.Cart, cartItem_model_1.CartItem,
        payment_model_1.Payment],
    synchronize: true,
    logging: false,
};
exports.default = sequelizeConfig;
//# sourceMappingURL=sequelize.config.js.map