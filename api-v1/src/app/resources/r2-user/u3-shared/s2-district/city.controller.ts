import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { DistrictService } from "./city.service";

@Controller('/disrict')
export class DistrictController{

    constructor(
        private readonly service : DistrictService,
    ){}

    @Get('')
    @HttpCode(HttpStatus.OK)
    get(){
        return this.service.get()
    }
}
