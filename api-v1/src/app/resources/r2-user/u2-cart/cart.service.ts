import { BadRequestException } from "@nestjs/common";
import { attribute } from "@sequelize/core/lib/expression-builders/attribute";
import { identifier } from "@sequelize/core/lib/expression-builders/identifier";
import { rejects } from "assert";
import { execSync } from "child_process";
import { error } from "console";
import { Error } from "sequelize";
import { Inventory } from "src/app/models/store/inventory.model";
import { Product } from "src/app/models/store/product.model";
import { ProductCategory } from "src/app/models/store/productCategory.model";
import { Cart } from "src/app/models/transaction/cart.model";
import { CartItem } from "src/app/models/transaction/cartItem.model";
import { Payment } from "src/app/models/transaction/payment.model";
import User from "src/app/models/user/user.model";
import { APIresponse } from "src/shared/interface/response";
import { TrustProductsListInstance } from "twilio/lib/rest/trusthub/v1/trustProducts";

export class CartService{

    //post item to cart
    async createCartforProduct(
    body : {
        product : number,
        user    : number,
        quantity: number,
    },
    params : {
    }): Promise<any> {

        try {
            //ensure that body is number
            const body_product = Number(body.product)
            const body_user    = Number(body.user)
            const body_quantity= Number(body.quantity)     


            let message
            let response


            //find if user exist or not
            const user = await User.findOne({
                where   : {id : body.user},
            })


            if(!user){
                throw new BadRequestException('User not Found')
            }

            const existing_cart = await Cart.findOne({
                where : {'user_id': user.id, 'is_ordered': false},
                raw   : false,
            })
            //find the product to add the total
            const product = await Product.findOne({
                where:      {'id': body_product},
                attributes: ['price', 'id']
            })
            
            if(!product){
                throw new BadRequestException('Product cannot be found')
            }
            
            const product_id = product.id
            const product_price = product.price
            
            try{
                
                //added product to the cart
                if(existing_cart){
                    
                    const cart_id = existing_cart.id

                    if(existing_cart?.is_ordered){
                        console.log('Item cart is already ordered')
                        message = 'Item cart is ordered'
                        throw new BadRequestException('Cart is already ordered.')
                    }
                    
                    //add the quantity of the product instead if product_id has already existed 
                    const product_exist = await CartItem.findOne({
                        where       : {'cart_id': cart_id, 'product_id': product_id}
                    })


                    if(!product_exist){
                        const add_product = {'product_id': product_id, 'cart_id': cart_id, 'quantity': body_quantity}
                        await CartItem.create(add_product)

                        console.log('Product does not exist in cart, adding to cart')
                    } else {
                        const update_quantity = product_exist.quantity + body_quantity

                        await CartItem.update(
                            { quantity: update_quantity },
                            { where: { product_id: product_id, cart_id: cart_id } }
                        );
                    }                    
    
                    const new_price     = body_quantity * product_price
                    const total_price = (existing_cart?.total) + new_price

                    console.log(existing_cart?.total, '+', new_price, '=', total_price)
                     
                    await existing_cart.update({total: total_price})

                    message = 'Item added to Cart'
                    response = {
                        message :  message,
                        statusCode : 200,
                        updatPrice : total_price
                    }

                }

                // Create new cart if not exist:
                if(!existing_cart){

                    const total    = product_price * body_quantity

                    const new_cart = { is_ordered: false, user_id: body_user, total: total };
                    await Cart.create(new_cart);
    
                    const cart = await Cart.findOne({
                        where: { user_id: body_user, is_ordered: false },
                        raw: true,
                    });
    
                    // handle case where no cart exists
                    if (!cart) {
                        console.log('Cart not found!');
                        message = 'Items cannot added to cart'
                    } else {
                        const cart_number = cart.id;
                        const add_product = {'product_id': body_product, 'cart_id': cart.id, 'quantity': body_quantity}
                        CartItem.create(add_product)
                        message = 'Cart created, Item added to Cart'
                    }

                    response = {
                        message :  message,
                        statusCode : 200,
                    }
                }
            } catch (err){
                throw new error('Cannot add or update cart', err?.message)
            }

            return response
        } catch (err) {
            throw new BadRequestException(err);
        }
    }


    //confirm the order and remove the quantity of the product from the store
    /*
            - Find a cart number
            - Find product from each store
            - Subtract out the value from each product
            - Added to the payment 
    */
    async confirmOrder(
        body    : {
            user    : number,
            payment_method : string,
        },
        params  : {
            cart    : number,
        }
    ){

        try {

            if(!body?.payment_method){
                throw new BadRequestException('Please enter required information')
            }

            const cart = await Cart.findOne({
                where : {'id': params?.cart, 'is_ordered': false, 'user_id': body.user},
                raw   : false,
            })

            if(!cart){
                throw new BadRequestException('Cart is not existing')
            } else {
                const {rows: data, count: number_of_data} = await CartItem.findAndCountAll({
                    where   : {'cart_id': params.cart},
                    raw     : false,
                })

                if(!data || data.length === 0){
                    throw new BadRequestException('Items cannot be found in cart')
                }
                //loop through each data and remove the quantity

                try{

                    for (const item of data){
    
                        const product_id = item.dataValues.product_id
                        const quantity_to_remove = item.dataValues.quantity
    
                        console.log('Removing product number', product_id)
                        // go to each of the product where the inventory come from and remove them
                        const product = await Product.findOne({
                            where   : {'id': product_id},
                            raw     : false,
                        })
    
                        //return error if product exist
                        if(!product || product.quantity < quantity_to_remove){
                            throw new BadRequestException('Cannot purchase product over its quantity')
                        }

                        const update_quantity = product.quantity - quantity_to_remove
                        await product.update({quantity : update_quantity})
                            
                        //after updating the value, we will update the cart
                        await cart.update({is_ordered : true})
                    }

                        let payment_info;
        
                        if(body.payment_method === 'cash'){
                            payment_info = {  payment_method : body.payment_method, 
                                                    payment_status : 'pending',
                                                    cart_id        : params.cart,
                                                    user_id        : body.user }
                            console.log('Creating payment cash')
                        }
                        if(body.payment_method === 'card'){
                            payment_info = {  payment_method       : body.payment_method, 
                                                    payment_status : 'paid',
                                                    cart_id        : params.cart,
                                                    user_id        : body.user }
                            console.log('Creating payment card')
                        }
                        
                        
                        console.log(payment_info)
                        if (!payment_info) {
                            throw new error('cannot access payment')
                        }               
                        await Payment.create(payment_info)
                        console.log('Payment created successfully');

                } catch (err) {
                    throw new BadRequestException(err?.message)
                }

                const response = {
                    message : 'Checkout Successfully',
                    statusCode : 200,
                }
                return  response               
            }

        } catch (err) {
            throw new BadRequestException(err?.message)
        }
    }


    async getCart(
        body : {
            user    : number,
        },
        params : {
            page   ?: number,
            limit  ?: number,
        }
    ): Promise<any>{

        try{

            //Ensure that the pagination is in correct order
            const page   = Math.max(params.page ?? 1)
            const limit  = Math.max(params.limit ?? 10)
            const offset = (page - 1) * limit;
 

            const {rows: data, count: number_of_data} = await Cart.findAndCountAll({
                where: { user_id: body.user },
                raw  : false,
                nest : true,
                attributes: ['id', 'is_ordered', 'total', 'updatedAt'],
            });
            const json_data = data.map(cart => cart.toJSON());
        
            const transformed = json_data.map((data) => ({
                    id          : data.id,
                    is_ordered  : data.is_ordered,
                    total       : data.total,
                    updatedAt   : data.updatedAt,
            }))

            const response: APIresponse = {
                data : transformed ,
                statusCode: 200,
            }

            if(number_of_data > limit){
                response.pagination = {
                    limit: limit,
                    offset : offset,
                    total_items : number_of_data,
                    total_page  : Math.ceil(number_of_data/page) 
                }
            }

            return response
        } catch (error) {
            console.error('Sequelize error:', error);
            
            // Optional: Log more details
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        
            // Rethrow or return a cleaner error
            throw new BadRequestException(error.message || 'Something went wrong');
        }
    }

    async getCartDetail(
        body : {
            user    : number,
        },
        params : {
            page   ?: number,
            limit  ?: number,
        }
    ): Promise<any>{

        try{

            //Ensure that the pagination is in correct order
            const page   = Math.max(params.page ?? 1)
            const limit  = Math.max(params.limit ?? 10)
            const offset = (page - 1) * limit;
 

            const {rows: data, count: number_of_data} = await Cart.findAndCountAll({
                where: { user_id: body.user },
                raw  : false,
                nest : true,
                attributes: ['id', 'is_ordered', 'total'],
                include: [
                    {
                        model: CartItem,
                        attributes: ['product_id', 'cart_id', 'quantity'],
                        include: [
                            {
                                model: Product,
                                attributes: ['name', 'price']
                            }
                        ]
                    }
                ]
            });
            const json_data = data.map(cart => cart.toJSON());

            console.log(json_data)
        
            const transformed = json_data.map((data) => ({
                    id          : data.id,
                    is_ordered  : data.is_ordered,
                    total       : data.total,
                    products_detail : data.cart_item.map(item => ({
                        id          : item.product_id,
                        quantity    : item.quantity,
                        name        : item.product.name,
                        price       : item.product.price
                    }))
            }))

            const response: APIresponse = {
                data : transformed ,
                statusCode: 200,
            }

            if(number_of_data > limit){
                response.pagination = {
                    limit: limit,
                    offset : offset,
                    total_items : number_of_data,
                    total_page  : Math.ceil(number_of_data/page) 
                }
            }

            return response
        } catch (error) {
            console.error('Sequelize error:', error);
            
            // Optional: Log more details
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        
            // Rethrow or return a cleaner error
            throw new BadRequestException(error.message || 'Something went wrong');
        }
    }

    async updateCart(
        params  : {
            cart    : number,
            product : number,
            quantity: number,
        },
        body    : {
            user    : number,
        }
    ): Promise<any>{
        
        try{
            
            let message : string
            //Ensure body is number
            const body_user = Number(body.user)

            const cart = await Cart.findOne({
                where   : {'id': params.cart, 'is_ordered': false, 'user_id': body_user},
                nest    : false,
                include : [{
                    model     : CartItem,
                    attributes : ['product_id', 'quantity', 'id'],
                    where      : {'product_id': params.product}
                }]
            })
            
            if(!cart){
                message =  'No product exist in cart'
            }

            const cartItem = cart?.dataValues.cart_item[0];
            // cartItem.quantity = params.quantity;
            await cartItem.update({quantity: params.quantity});
            
            console.log('update cart item', cart?.dataValues.cart_item[0], 'quantity: ', params.quantity)

            message = 'true'
            const statusCode = 200;

            const response = {
                message,
                statusCode
            }
            return response
            
        } catch (err) {
            console.log(err)
            throw new BadRequestException(err?.message)
        }
    }
}