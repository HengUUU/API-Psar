"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistrictService = void 0;
const district_model_1 = require("../../../../models/location/district.model");
class DistrictService {
    async get() {
        const district = await district_model_1.District.findAll({
            attributes: ['id', 'name']
        });
        return district;
    }
}
exports.DistrictService = DistrictService;
//# sourceMappingURL=city.service.js.map