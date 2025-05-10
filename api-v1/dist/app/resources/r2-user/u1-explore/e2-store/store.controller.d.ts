import { StoreService } from "./store.service";
export declare class StoreController {
    private readonly service;
    constructor(service: StoreService);
    getStore(limit?: number, page?: number): Promise<import("../../../../../shared/interface/response").APIresponse<any>>;
}
