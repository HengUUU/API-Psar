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
exports.CartItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("../store/product.model");
const cart_model_1 = require("./cart.model");
let CartItem = class CartItem extends sequelize_typescript_1.Model {
    quantity;
    cart_id;
    product_id;
    product;
};
exports.CartItem = CartItem;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], CartItem.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => cart_model_1.Cart),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, }),
    __metadata("design:type", Number)
], CartItem.prototype, "cart_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], CartItem.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cart_model_1.Cart),
    __metadata("design:type", cart_model_1.Cart)
], CartItem.prototype, "cart", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_model_1.Product),
    __metadata("design:type", product_model_1.Product)
], CartItem.prototype, "product", void 0);
exports.CartItem = CartItem = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'CartItem',
        underscored: true,
    })
], CartItem);
//# sourceMappingURL=cartItem.model.js.map