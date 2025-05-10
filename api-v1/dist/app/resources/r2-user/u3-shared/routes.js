"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedRoute = void 0;
const shared_module_1 = require("./shared.module");
const city_module_1 = require("./s1-city/city.module");
exports.SharedRoute = [
    {
        path: '/',
        module: shared_module_1.SharedModule,
    },
    {
        path: '/',
        module: city_module_1.CityModule,
    }
];
//# sourceMappingURL=routes.js.map