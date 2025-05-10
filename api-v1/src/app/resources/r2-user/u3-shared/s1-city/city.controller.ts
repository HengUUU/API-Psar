import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { CityService } from "./city.service";

@Controller('/city')
export class CityController{

    constructor(
        private readonly service : CityService,
    ){}

    @Get('')
    @HttpCode(HttpStatus.OK)
    get(){
        return this.service.get()
    }
}
