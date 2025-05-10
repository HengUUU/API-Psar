import { APIresponse } from "src/shared/interface/response";
export declare class StoreService {
    getDataStore(params: {
        limit?: number;
        page?: number;
    }): Promise<APIresponse>;
}
