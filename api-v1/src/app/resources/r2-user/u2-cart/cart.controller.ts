import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, UseGuards } from "@nestjs/common"
import { CartService } from "./cart.service";

@Controller('/cart')
export class CartController {

    constructor(
        private readonly service : CartService,
    ){}
    @Post('/items')
    @HttpCode(HttpStatus.OK)
    createCart(
        @Body ('user')      user         : number,
        @Body ('product')   product      : number,
        @Body ('quantity')  quantity     : number,

    ){
      
        
        const body = {
            user,
            product,
            quantity,
        }

        const params = {
            // cart
        }

        return this.service.createCartforProduct(body, params)
    }

    @Post('/checkout')
    @HttpCode(HttpStatus.OK)
    updateCart(
        @Body ('user')      user        : number,
        @Body('payment_method') payment_method             : string,
        
        @Query('cart')      cart        : number,
    ){

        const body = {
            user,
            payment_method
        }

        const params = {
            cart,
        }

        return this.service.confirmOrder(body, params);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getCart(
        @Body('user')      user         : number,

        @Query('limit')     limit      ?: number,
        @Query('page')      page       ?: number,
    ){
        const body = {
            user
        }

        const params = {
            limit,
            page
        }

        return this.service.getCart(body, params)
    }

    @Get('/detail')
    @HttpCode(HttpStatus.OK)
    getCartUser(
        @Body('user')       user        : number,

        @Query('limit')     limit      ?: number,
        @Query('page')      page       ?: number,
    ){
        
        const body = {
            user
        }

        const params = {
            limit,
            page
        }
        return this.service.getCartDetail(body, params)
    }

    @Post('/')
    @HttpCode(HttpStatus.OK)
    Update(
        @Query('cart')      cart        : number,
        @Query('product')   product     : number,
        @Query('quantity')  quantity    : number,

        @Body('user')       user        : number,
    ){

        const params = {
            cart,
            product,
            quantity
        }

        const body = {
            user,
        }

        return this.service.updateCart(params, body)
    }
}