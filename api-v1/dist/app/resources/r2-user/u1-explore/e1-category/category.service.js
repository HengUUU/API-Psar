"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_model_1 = require("../../../../models/store/category.model");
let CategoryService = class CategoryService {
    async getDataCategory(params) {
        try {
            const page = Math.max(params.page ?? 1);
            const limit = Math.max(params.limit ?? 10);
            const offset = (page - 1) * limit;
            const { rows: data, count: number_of_data } = await category_model_1.Category.findAndCountAll({
                attributes: [
                    'id',
                    'name',
                ],
                limit: params.limit,
                offset: offset,
            });
            if (data.length === 0) {
                return {
                    data: []
                };
            }
            const response = {
                data: data,
                statusCode: 200,
            };
            if (number_of_data > limit) {
                response.pagination = {
                    limit: limit,
                    offset: offset,
                    total_items: number_of_data,
                    total_page: Math.ceil(number_of_data / page)
                };
            }
            return response;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err.message);
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)()
], CategoryService);
//# sourceMappingURL=category.service.js.map