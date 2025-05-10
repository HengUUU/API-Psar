import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { CategoryService } from "./category.service";

@Controller('/category')
export class CategoryController{
    
    constructor(
        private readonly service : CategoryService
    ){}

    @Get('/')
    @HttpCode(HttpStatus.OK)
    getCategory(
        @Query('limit')     limit?: number,
        @Query('page')      page?: number
    ){

        const params = {
            limit,
            page,
        }

        return this.service.getDataCategory(params)
    }
}