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
exports.Category = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("./product.model");
const productCategory_model_1 = require("./productCategory.model");
let Category = class Category extends sequelize_typescript_1.Model {
    name;
    products;
};
exports.Category = Category;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => product_model_1.Product, { through: () => productCategory_model_1.ProductCategory, foreignKey: 'category_id' }),
    __metadata("design:type", Array)
], Category.prototype, "products", void 0);
exports.Category = Category = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'category',
        underscored: true,
    })
], Category);
//# sourceMappingURL=category.model.js.map