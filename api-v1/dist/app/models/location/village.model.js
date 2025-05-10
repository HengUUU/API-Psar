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
exports.Village = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const commune_model_1 = require("./commune.model");
let Village = class Village extends sequelize_typescript_1.Model {
};
exports.Village = Village;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false, unique: true }),
    __metadata("design:type", String)
], Village.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => commune_model_1.Commune),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Village.prototype, "communeId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => commune_model_1.Commune),
    __metadata("design:type", commune_model_1.Commune)
], Village.prototype, "communeclear", void 0);
exports.Village = Village = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Village',
        freezeTableName: true,
        underscored: true,
    })
], Village);
//# sourceMappingURL=village.model.js.map