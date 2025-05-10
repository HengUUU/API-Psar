import { CityService } from "./city.service";
export declare class CityController {
    private readonly service;
    constructor(service: CityService);
    get(): Promise<any>;
}
