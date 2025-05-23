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
exports.ProductCategory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("./product.model");
const category_model_1 = require("./category.model");
let ProductCategory = class ProductCategory extends sequelize_typescript_1.Model {
    product_id;
    category_id;
};
exports.ProductCategory = ProductCategory;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true
    }),
    __metadata("design:type", Number)
], ProductCategory.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, unique: false }),
    __metadata("design:type", Number)
], ProductCategory.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => category_model_1.Category),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, unique: false }),
    __metadata("design:type", Number)
], ProductCategory.prototype, "category_id", void 0);
exports.ProductCategory = ProductCategory = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'ProductCategory',
        freezeTableName: true,
    })
], ProductCategory);
//# sourceMappingURL=productCategory.model.js.map