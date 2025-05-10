"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const city_model_1 = require("../../../../models/location/city.model");
class CityService {
    async get() {
        const city = await city_model_1.City.findAll({
            attributes: ['id', 'name']
        });
        return city;
    }
}
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map