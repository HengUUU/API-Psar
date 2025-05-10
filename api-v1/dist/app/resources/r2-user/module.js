"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const explore_module_1 = require("./u1-explore/explore.module");
const cart_module_1 = require("./u2-cart/cart.module");
const shared_module_1 = require("./u3-shared/shared.module");
const user_middleware_1 = require("../auth/middleware/user.middleware");
const jwt_service_1 = require("../auth/jwt/jwt.service");
let UserModule = class UserModule {
    configure(consumer) {
        consumer.apply(user_middleware_1.UserMiddleware)
            .forRoutes({ path: '/api/v1/user/*', method: common_1.RequestMethod.ALL });
    }
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        providers: [jwt_service_1.JwtService],
        imports: [
            explore_module_1.ExploreModule,
            cart_module_1.CartModule,
            shared_module_1.SharedModule,
        ]
    })
], UserModule);
//# sourceMappingURL=module.js.map