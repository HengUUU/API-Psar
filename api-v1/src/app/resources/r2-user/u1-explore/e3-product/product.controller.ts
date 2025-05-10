import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('/product')
export class ProductController{
    
    constructor(
        private readonly service : ProductService
    ){}

    @Get('/category')
    @HttpCode(HttpStatus.OK)
    getProductCategory(
        @Query('category')  category : number,
        @Query('limit')     limit   ?: number,
        @Query('page')      page    ?: number,
    ){

        const params = {
            category,
            limit,
            page,
        }
        
        return this.service.getbyCategory(params)
    }

    @Get('/view')
    @HttpCode(HttpStatus.OK)
    view(
        @Query('product')  product       : number,
    ){

        const params = {
            product
        }

        return this.service.view(params)
    }

    @Get('/store')
    @HttpCode(HttpStatus.OK)
    getProductbyStore(
        @Query('store') store           : number,
        @Query('page')  page           ?: number,
        @Query('limit') limit          ?: number,
    ){

        const params = {
            store,
            page,
            limit
        }

        // return this.service.getDataProductbyStore(params)
    }
}