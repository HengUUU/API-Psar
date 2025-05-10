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
exports.Store = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const inventory_model_1 = require("./inventory.model");
const location_model_1 = require("../user/location.model");
let Store = class Store extends sequelize_typescript_1.Model {
    name;
    phoneNumber;
    location_id;
    inventory_id;
};
exports.Store = Store;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, unique: true }),
    __metadata("design:type", String)
], Store.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, unique: true }),
    __metadata("design:type", String)
], Store.prototype, "phoneNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => location_model_1.default, { foreignKey: 'store_id', as: 'location_id' }),
    __metadata("design:type", location_model_1.default)
], Store.prototype, "location_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => inventory_model_1.Inventory, { foreignKey: 'store_id', as: 'inventory_id' }),
    __metadata("design:type", Array)
], Store.prototype, "inventory_id", void 0);
exports.Store = Store = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'store',
        freezeTableName: true,
        underscored: true,
    })
], Store);
//# sourceMappingURL=store.model.js.map