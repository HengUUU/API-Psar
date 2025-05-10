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
exports.District = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const city_model_1 = require("./city.model");
const commune_model_1 = require("./commune.model");
let District = class District extends sequelize_typescript_1.Model {
};
exports.District = District;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, unique: true }),
    __metadata("design:type", String)
], District.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => city_model_1.City),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], District.prototype, "cityId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => city_model_1.City),
    __metadata("design:type", city_model_1.City)
], District.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => commune_model_1.Commune),
    __metadata("design:type", Array)
], District.prototype, "communes", void 0);
exports.District = District = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'District',
        underscored: true,
        freezeTableName: true,
    })
], District);
//# sourceMappingURL=district.model.js.map