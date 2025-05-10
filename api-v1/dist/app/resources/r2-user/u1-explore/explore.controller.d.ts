import { ExploreService } from "./explore.service";
export declare class ExploreController {
    private readonly service;
    constructor(service: ExploreService);
    getProductCategory(category: number, limit?: number, page?: number): Promise<any>;
    getProductDetail(product: number): Promise<import("../../../../shared/interface/response").APIresponse<any>>;
    getProductbyStore(store: number, page?: number, limit?: number): Promise<any>;
    getProductbyStoreCategory(store: number, category: number, page: number, limit: number): Promise<any>;
}
