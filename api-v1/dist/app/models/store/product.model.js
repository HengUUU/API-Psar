"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const inventory_model_1 = require("./inventory.model");
const category_model_1 = require("./category.model");
const cartItem_model_1 = require("../transaction/cartItem.model");
const productCategory_model_1 = require("./productCategory.model");
let Product = class Product extends sequelize_typescript_1.Model {
    category;
    cartItem;
    inventory_id;
    inventory;
};
exports.Product = Product;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => category_model_1.Category, { through: () => productCategory_model_1.ProductCategory, foreignKey: 'product_id' }),
    __metadata("design:type", Array)
], Product.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => cartItem_model_1.CartItem, { foreignKey: 'product_id' }),
    __metadata("design:type", Array)
], Product.prototype, "cartItem", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => inventory_model_1.Inventory),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Product.prototype, "inventory_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => inventory_model_1.Inventory),
    __metadata("design:type", inventory_model_1.Inventory)
], Product.prototype, "inventory", void 0);
exports.Product = Product = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'product',
        underscored: true,
    })
], Product);
//# sourceMappingURL=product.model.js.map