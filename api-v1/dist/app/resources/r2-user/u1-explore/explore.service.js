"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreService = void 0;
const common_1 = require("@nestjs/common");
const category_model_1 = require("../../../models/store/category.model");
const inventory_model_1 = require("../../../models/store/inventory.model");
const product_model_1 = require("../../../models/store/product.model");
const store_model_1 = require("../../../models/store/store.model");
let ExploreService = class ExploreService {
    async getDataProductCategory(params) {
        try {
            const page = Math.max(params.page ?? 1);
            const limit = Math.max(params.limit ?? 10);
            const offset = (page - 1) * limit;
            console.log(params.category);
            const { rows: data, count: number_of_data } = await product_model_1.Product.findAndCountAll({
                attributes: ['id', 'name', 'price', 'description'],
                offset: offset,
                nest: false,
                limit: limit,
                raw: true,
                include: [{
                        model: category_model_1.Category,
                        attributes: ['id', 'name'],
                        where: { id: params.category }
                    }],
            });
            const transformed = data.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                description: item.description,
                category: item['category.name'],
            }));
            const response = {
                data: transformed,
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
            throw new common_1.BadRequestException(err);
        }
    }
    async getProductDetail(params) {
        try {
            const data = await product_model_1.Product.findOne({
                where: { id: params.product },
                raw: true,
                nest: true,
                attributes: ['id', 'name', 'price', 'description', 'quantity', 'inventory_id'],
                include: [{
                        model: inventory_model_1.Inventory,
                        attributes: ['store_id'],
                        include: [{
                                model: store_model_1.Store,
                                attributes: ['id', 'name']
                            }]
                    }]
            });
            if (!data) {
                throw new common_1.NotFoundException("Product not found");
            }
            const transformed = {
                id: data.id,
                name: data.name,
                price: data.price,
                quantity: data.quantity,
                description: data.description,
                store_id: data.inventory?.store?.id,
                store_name: data.inventory?.store?.name
            };
            const reponse = {
                data: transformed,
                statusCode: 200,
            };
            return reponse;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async getDataProductbyStore(params) {
        try {
            console.log(params.store);
            const page = Math.max(params.page ?? 1);
            const limit = Math.max(params.limit ?? 10);
            const offset = (page - 1) * limit;
            const { rows: data, count: number_of_data } = await product_model_1.Product.findAndCountAll({
                attributes: ['id', 'name', 'price', 'description'],
                offset: offset,
                nest: true,
                limit: limit,
                raw: true,
                include: [{
                        model: inventory_model_1.Inventory,
                        attributes: ['store_id'],
                        where: { store_id: params.store },
                        include: [{
                                model: store_model_1.Store,
                                attributes: ['id', 'name'],
                            }]
                    }],
            });
            console.log(data);
            const transformed = data.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                description: item.description,
                category: item['category.name'],
            }));
            const response = {
                data: transformed,
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
            throw new common_1.BadRequestException(err);
        }
    }
    async getDataProductbyStoreandCategory(params) {
        const page = Math.max(params.page ?? 1);
        const limit = Math.max(params.limit ?? 10);
        const offset = (page - 1) * limit;
        try {
            const where = {};
            if (params?.store) {
                where['inventory.store_id'] = params.store;
            }
            if (params?.category) {
                where['product.category'] = params.category;
            }
            console.log(where);
            const { rows: data, count: number_of_data } = await product_model_1.Product.findAndCountAll({
                attributes: ['id', 'name', 'price', 'description', 'quantity'],
                offset: offset,
                limit: limit,
                nest: false,
                raw: true,
                include: [
                    {
                        model: category_model_1.Category,
                        attributes: ['name'],
                        required: !!params.category,
                    },
                    {
                        model: inventory_model_1.Inventory,
                        attributes: ['store_id'],
                        include: [{
                                model: store_model_1.Store,
                                attributes: ['name'],
                                required: !!params.store,
                            },
                        ],
                    }
                ],
            });
            console.log(data);
            const transformed = data.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                description: item.description,
                store_name: item['inventory.store.name'],
                category_name: item['category.name'],
            }));
            return transformed;
        }
        catch (err) {
            throw new common_1.BadRequestException(err?.message);
        }
    }
};
exports.ExploreService = ExploreService;
exports.ExploreService = ExploreService = __decorate([
    (0, common_1.Injectable)()
], ExploreService);
//# sourceMappingURL=explore.service.js.map