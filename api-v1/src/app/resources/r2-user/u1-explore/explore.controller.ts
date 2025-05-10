import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { ExploreService } from "./explore.service";

@Controller('/')
export class ExploreController{
    
    constructor(
        private readonly service : ExploreService
    ){}

    // @Get('/category')
    // @HttpCode(HttpStatus.OK)
    // getCategory(
    //     @Query('limit')     limit?: number,
    //     @Query('page')      page?: number
    // ){

    //     const params = {
    //         limit,
    //         page,
    //     }

    //     return this.service.getDataCategory(params)
    // }


    // @Get('/store')
    // @HttpCode(HttpStatus.OK)
    // getStore(
    //     @Query('limit')     limit?: number,
    //     @Query('page')      page ?: number
    // ){

    //     const params = {
    //         limit, 
    //         page,
    //     }

    //     return this.service.getDataStore(params)
    // }

    @Get('/category/product')
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
        
        return this.service.getDataProductCategory(params)
    }

    @Get('/category/product/detail')
    @HttpCode(HttpStatus.OK)
    getProductDetail(
        @Query('product')  product       : number,
    ){

        const params = {
            product
        }

        return this.service.getProductDetail(params)
    }

    @Get('/store/product')
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

        return this.service.getDataProductbyStore(params)
    }

    @Get('/store/category')
    @HttpCode(HttpStatus.OK)
    getProductbyStoreCategory(
        @Query('store') store           : number,
        @Query('category') category     : number,
        @Query('page')  page            : number, 
        @Query('limit')   limit         : number,
    ){

        const params = {
            store,
            category,
            page,
            limit,
        }

        return this.service.getDataProductbyStoreandCategory(params)
    }
}