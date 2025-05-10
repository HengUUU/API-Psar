import { DistrictService } from "./city.service";
export declare class DistrictController {
    private readonly service;
    constructor(service: DistrictService);
    get(): Promise<any>;
}
