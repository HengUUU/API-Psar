"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const shared_controller_1 = require("./shared.controller");
const shared_service_1 = require("./shared.service");
const city_controller_1 = require("./s1-city/city.controller");
const city_service_1 = require("./s1-city/city.service");
const city_controller_2 = require("./s2-district/city.controller");
const city_service_2 = require("./s2-district/city.service");
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, common_1.Module)({
        controllers: [shared_controller_1.SharedController, city_controller_1.CityController, city_controller_2.DistrictController],
        providers: [shared_service_1.SharedService, city_service_1.CityService, city_service_2.DistrictService],
    })
], SharedModule);
//# sourceMappingURL=shared.module.js.map