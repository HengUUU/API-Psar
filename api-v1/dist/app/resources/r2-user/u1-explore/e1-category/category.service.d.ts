import { APIresponse } from "src/shared/interface/response";
export declare class CategoryService {
    getDataCategory(params: {
        limit?: number;
        page?: number;
    }): Promise<APIresponse>;
}
