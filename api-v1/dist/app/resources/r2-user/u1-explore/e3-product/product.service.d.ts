import { APIresponse } from "src/shared/interface/response";
export declare class ProductService {
    getbyCategory(params: {
        category: number;
        limit?: number;
        page?: number;
    }): Promise<any>;
    view(params: {
        product: number;
    }): Promise<APIresponse>;
}
