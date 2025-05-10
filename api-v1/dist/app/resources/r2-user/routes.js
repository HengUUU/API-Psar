"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const explore_module_1 = require("./u1-explore/explore.module");
const shared_module_1 = require("./u3-shared/shared.module");
const cart_module_1 = require("./u2-cart/cart.module");
exports.UserRoutes = [
    {
        path: '/',
        module: explore_module_1.ExploreModule,
    },
    {
        path: '/',
        module: cart_module_1.CartModule,
    },
    {
        path: '/',
        module: shared_module_1.SharedModule,
    }
];
//# sourceMappingURL=routes.js.map