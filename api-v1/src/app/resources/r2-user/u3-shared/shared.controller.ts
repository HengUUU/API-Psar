import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { SharedService } from "./shared.service";

@Controller('/shared')
export class SharedController{

    constructor(
        private readonly service : SharedService,
    ){}

    // @Get('')
    // @HttpCode(HttpStatus.OK)
    // get(
    //     params : {
    //         city        ?: number,
    //     }
    // ){
    //     retu rn 
    // }
}
