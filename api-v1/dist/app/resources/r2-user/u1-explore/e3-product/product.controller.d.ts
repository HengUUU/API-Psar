import { ProductService } from "./product.service";
export declare class ProductController {
    private readonly service;
    constructor(service: ProductService);
    getProductCategory(category: number, limit?: number, page?: number): Promise<any>;
    view(product: number): Promise<import("../../../../../shared/interface/response").APIresponse<any>>;
    getProductbyStore(store: number, page?: number, limit?: number): void;
}
