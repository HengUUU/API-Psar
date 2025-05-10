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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreController = void 0;
const common_1 = require("@nestjs/common");
const explore_service_1 = require("./explore.service");
let ExploreController = class ExploreController {
    service;
    constructor(service) {
        this.service = service;
    }
    getProductCategory(category, limit, page) {
        const params = {
            category,
            limit,
            page,
        };
        return this.service.getDataProductCategory(params);
    }
    getProductDetail(product) {
        const params = {
            product
        };
        return this.service.getProductDetail(params);
    }
    getProductbyStore(store, page, limit) {
        const params = {
            store,
            page,
            limit
        };
        return this.service.getDataProductbyStore(params);
    }
    getProductbyStoreCategory(store, category, page, limit) {
        const params = {
            store,
            category,
            page,
            limit,
        };
        return this.service.getDataProductbyStoreandCategory(params);
    }
};
exports.ExploreController = ExploreController;
__decorate([
    (0, common_1.Get)('/category/product'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('category')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], ExploreController.prototype, "getProductCategory", null);
__decorate([
    (0, common_1.Get)('/category/product/detail'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('product')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExploreController.prototype, "getProductDetail", null);
__decorate([
    (0, common_1.Get)('/store/product'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('store')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], ExploreController.prototype, "getProductbyStore", null);
__decorate([
    (0, common_1.Get)('/store/category'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('store')),
    __param(1, (0, common_1.Query)('category')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], ExploreController.prototype, "getProductbyStoreCategory", null);
exports.ExploreController = ExploreController = __decorate([
    (0, common_1.Controller)('/'),
    __metadata("design:paramtypes", [explore_service_1.ExploreService])
], ExploreController);
//# sourceMappingURL=explore.controller.js.map