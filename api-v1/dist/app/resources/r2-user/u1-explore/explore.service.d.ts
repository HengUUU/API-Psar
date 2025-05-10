import { APIresponse } from "src/shared/interface/response";
export declare class ExploreService {
    getDataProductCategory(params: {
        category: number;
        limit?: number;
        page?: number;
    }): Promise<any>;
    getProductDetail(params: {
        product: number;
    }): Promise<APIresponse>;
    getDataProductbyStore(params: {
        store: number;
        limit?: number;
        page?: number;
    }): Promise<any>;
    getDataProductbyStoreandCategory(params: {
        store: number;
        category: number;
        limit?: number;
        page?: number;
    }): Promise<any>;
}
