import { CategoryService } from "./category.service";
export declare class CategoryController {
    private readonly service;
    constructor(service: CategoryService);
    getCategory(limit?: number, page?: number): Promise<import("../../../../../shared/interface/response").APIresponse<any>>;
}
