"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const route_1 = require("./app/resources/auth/auth/route");
const routes_1 = require("./app/resources/r2-user/routes");
exports.appRoutes = [{
        path: 'api',
        children: [
            {
                path: 'v1',
                children: [
                    {
                        path: 'auth',
                        children: route_1.authRoutes,
                    },
                    {
                        path: 'user',
                        children: routes_1.UserRoutes,
                    },
                ]
            }
        ]
    }];
//# sourceMappingURL=app.route.js.map