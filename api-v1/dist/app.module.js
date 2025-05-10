"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const module_1 = require("./app/resources/auth/auth/module");
const jwt_service_1 = require("./app/resources/auth/jwt/jwt.service");
const core_1 = require("@nestjs/core");
const app_route_1 = require("./app.route");
;
const config_module_1 = require("./config/config.module");
const module_2 = require("./app/resources/r2-user/module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ConfigModule,
            module_1.AuthModule,
            module_2.UserModule,
            core_1.RouterModule.register(app_route_1.appRoutes),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, jwt_service_1.JwtService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map