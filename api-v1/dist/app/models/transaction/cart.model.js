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
exports.Cart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../user/user.model");
const cartItem_model_1 = require("./cartItem.model");
const payment_model_1 = require("./payment.model");
let Cart = class Cart extends sequelize_typescript_1.Model {
    is_ordered;
    user_id;
};
exports.Cart = Cart;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Cart.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN }),
    __metadata("design:type", Boolean)
], Cart.prototype, "is_ordered", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Cart.prototype, "total", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.default),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Cart.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => cartItem_model_1.CartItem, { foreignKey: 'cart_id' }),
    __metadata("design:type", Array)
], Cart.prototype, "cart_item", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => payment_model_1.Payment, { foreignKey: 'cart_id' }),
    __metadata("design:type", payment_model_1.Payment)
], Cart.prototype, "payment", void 0);
exports.Cart = Cart = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'cart',
        underscored: true,
    })
], Cart);
//# sourceMappingURL=cart.model.js.map