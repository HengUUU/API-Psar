import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { StoreService } from "./store.service";

@Controller('/')
export class StoreController{
    
    constructor(
        private readonly service : StoreService
    ){}

    @Get('/store')
    @HttpCode(HttpStatus.OK)
    getStore(
        @Query('limit')     limit?: number,
        @Query('page')      page ?: number
    ){

        const params = {
            limit, 
            page,
        }

        return this.service.getDataStore(params)
    }
}