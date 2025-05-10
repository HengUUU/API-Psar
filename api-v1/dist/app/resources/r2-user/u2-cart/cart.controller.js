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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
let CartController = class CartController {
    service;
    constructor(service) {
        this.service = service;
    }
    createCart(user, product, quantity) {
        const body = {
            user,
            product,
            quantity,
        };
        const params = {};
        return this.service.createCartforProduct(body, params);
    }
    updateCart(user, payment_method, cart) {
        const body = {
            user,
            payment_method
        };
        const params = {
            cart,
        };
        return this.service.confirmOrder(body, params);
    }
    getCart(user, limit, page) {
        const body = {
            user
        };
        const params = {
            limit,
            page
        };
        return this.service.getCart(body, params);
    }
    getCartUser(user, limit, page) {
        const body = {
            user
        };
        const params = {
            limit,
            page
        };
        return this.service.getCartDetail(body, params);
    }
    Update(cart, product, quantity, user) {
        const params = {
            cart,
            product,
            quantity
        };
        const body = {
            user,
        };
        return this.service.updateCart(params, body);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)('/items'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('user')),
    __param(1, (0, common_1.Body)('product')),
    __param(2, (0, common_1.Body)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "createCart", null);
__decorate([
    (0, common_1.Post)('/checkout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('user')),
    __param(1, (0, common_1.Body)('payment_method')),
    __param(2, (0, common_1.Query)('cart')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "updateCart", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('user')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getCart", null);
__decorate([
    (0, common_1.Get)('/detail'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('user')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getCartUser", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('cart')),
    __param(1, (0, common_1.Query)('product')),
    __param(2, (0, common_1.Query)('quantity')),
    __param(3, (0, common_1.Body)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "Update", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('/cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map