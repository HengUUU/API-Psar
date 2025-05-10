"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const console_1 = require("console");
const product_model_1 = require("../../../models/store/product.model");
const cart_model_1 = require("../../../models/transaction/cart.model");
const cartItem_model_1 = require("../../../models/transaction/cartItem.model");
const payment_model_1 = require("../../../models/transaction/payment.model");
const user_model_1 = require("../../../models/user/user.model");
class CartService {
    async createCartforProduct(body, params) {
        try {
            const body_product = Number(body.product);
            const body_user = Number(body.user);
            const body_quantity = Number(body.quantity);
            let message;
            let response;
            const user = await user_model_1.default.findOne({
                where: { id: body.user },
            });
            if (!user) {
                throw new common_1.BadRequestException('User not Found');
            }
            const existing_cart = await cart_model_1.Cart.findOne({
                where: { 'user_id': user.id, 'is_ordered': false },
                raw: false,
            });
            const product = await product_model_1.Product.findOne({
                where: { 'id': body_product },
                attributes: ['price', 'id']
            });
            if (!product) {
                throw new common_1.BadRequestException('Product cannot be found');
            }
            const product_id = product.id;
            const product_price = product.price;
            try {
                if (existing_cart) {
                    const cart_id = existing_cart.id;
                    if (existing_cart?.is_ordered) {
                        console.log('Item cart is already ordered');
                        message = 'Item cart is ordered';
                        throw new common_1.BadRequestException('Cart is already ordered.');
                    }
                    const product_exist = await cartItem_model_1.CartItem.findOne({
                        where: { 'cart_id': cart_id, 'product_id': product_id }
                    });
                    if (!product_exist) {
                        const add_product = { 'product_id': product_id, 'cart_id': cart_id, 'quantity': body_quantity };
                        await cartItem_model_1.CartItem.create(add_product);
                        console.log('Product does not exist in cart, adding to cart');
                    }
                    else {
                        const update_quantity = product_exist.quantity + body_quantity;
                        await cartItem_model_1.CartItem.update({ quantity: update_quantity }, { where: { product_id: product_id, cart_id: cart_id } });
                    }
                    const new_price = body_quantity * product_price;
                    const total_price = (existing_cart?.total) + new_price;
                    console.log(existing_cart?.total, '+', new_price, '=', total_price);
                    await existing_cart.update({ total: total_price });
                    message = 'Item added to Cart';
                    response = {
                        message: message,
                        statusCode: 200,
                        updatPrice: total_price
                    };
                }
                if (!existing_cart) {
                    const total = product_price * body_quantity;
                    const new_cart = { is_ordered: false, user_id: body_user, total: total };
                    await cart_model_1.Cart.create(new_cart);
                    const cart = await cart_model_1.Cart.findOne({
                        where: { user_id: body_user, is_ordered: false },
                        raw: true,
                    });
                    if (!cart) {
                        console.log('Cart not found!');
                        message = 'Items cannot added to cart';
                    }
                    else {
                        const cart_number = cart.id;
                        const add_product = { 'product_id': body_product, 'cart_id': cart.id, 'quantity': body_quantity };
                        cartItem_model_1.CartItem.create(add_product);
                        message = 'Cart created, Item added to Cart';
                    }
                    response = {
                        message: message,
                        statusCode: 200,
                    };
                }
            }
            catch (err) {
                throw new console_1.error('Cannot add or update cart', err?.message);
            }
            return response;
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
    async confirmOrder(body, params) {
        try {
            if (!body?.payment_method) {
                throw new common_1.BadRequestException('Please enter required information');
            }
            const cart = await cart_model_1.Cart.findOne({
                where: { 'id': params?.cart, 'is_ordered': false, 'user_id': body.user },
                raw: false,
            });
            if (!cart) {
                throw new common_1.BadRequestException('Cart is not existing');
            }
            else {
                const { rows: data, count: number_of_data } = await cartItem_model_1.CartItem.findAndCountAll({
                    where: { 'cart_id': params.cart },
                    raw: false,
                });
                if (!data || data.length === 0) {
                    throw new common_1.BadRequestException('Items cannot be found in cart');
                }
                try {
                    for (const item of data) {
                        const product_id = item.dataValues.product_id;
                        const quantity_to_remove = item.dataValues.quantity;
                        console.log('Removing product number', product_id);
                        const product = await product_model_1.Product.findOne({
                            where: { 'id': product_id },
                            raw: false,
                        });
                        if (!product || product.quantity < quantity_to_remove) {
                            throw new common_1.BadRequestException('Cannot purchase product over its quantity');
                        }
                        const update_quantity = product.quantity - quantity_to_remove;
                        await product.update({ quantity: update_quantity });
                        await cart.update({ is_ordered: true });
                    }
                    let payment_info;
                    if (body.payment_method === 'cash') {
                        payment_info = { payment_method: body.payment_method,
                            payment_status: 'pending',
                            cart_id: params.cart,
                            user_id: body.user };
                        console.log('Creating payment cash');
                    }
                    if (body.payment_method === 'card') {
                        payment_info = { payment_method: body.payment_method,
                            payment_status: 'paid',
                            cart_id: params.cart,
                            user_id: body.user };
                        console.log('Creating payment card');
                    }
                    console.log(payment_info);
                    if (!payment_info) {
                        throw new console_1.error('cannot access payment');
                    }
                    await payment_model_1.Payment.create(payment_info);
                    console.log('Payment created successfully');
                }
                catch (err) {
                    throw new common_1.BadRequestException(err?.message);
                }
                const response = {
                    message: 'Checkout Successfully',
                    statusCode: 200,
                };
                return response;
            }
        }
        catch (err) {
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async getCart(body, params) {
        try {
            const page = Math.max(params.page ?? 1);
            const limit = Math.max(params.limit ?? 10);
            const offset = (page - 1) * limit;
            const { rows: data, count: number_of_data } = await cart_model_1.Cart.findAndCountAll({
                where: { user_id: body.user },
                raw: false,
                nest: true,
                attributes: ['id', 'is_ordered', 'total', 'updatedAt'],
            });
            const json_data = data.map(cart => cart.toJSON());
            const transformed = json_data.map((data) => ({
                id: data.id,
                is_ordered: data.is_ordered,
                total: data.total,
                updatedAt: data.updatedAt,
            }));
            const response = {
                data: transformed,
                statusCode: 200,
            };
            if (number_of_data > limit) {
                response.pagination = {
                    limit: limit,
                    offset: offset,
                    total_items: number_of_data,
                    total_page: Math.ceil(number_of_data / page)
                };
            }
            return response;
        }
        catch (error) {
            console.error('Sequelize error:', error);
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
            throw new common_1.BadRequestException(error.message || 'Something went wrong');
        }
    }
    async getCartDetail(body, params) {
        try {
            const page = Math.max(params.page ?? 1);
            const limit = Math.max(params.limit ?? 10);
            const offset = (page - 1) * limit;
            const { rows: data, count: number_of_data } = await cart_model_1.Cart.findAndCountAll({
                where: { user_id: body.user },
                raw: false,
                nest: true,
                attributes: ['id', 'is_ordered', 'total'],
                include: [
                    {
                        model: cartItem_model_1.CartItem,
                        attributes: ['product_id', 'cart_id', 'quantity'],
                        include: [
                            {
                                model: product_model_1.Product,
                                attributes: ['name', 'price']
                            }
                        ]
                    }
                ]
            });
            const json_data = data.map(cart => cart.toJSON());
            console.log(json_data);
            const transformed = json_data.map((data) => ({
                id: data.id,
                is_ordered: data.is_ordered,
                total: data.total,
                products_detail: data.cart_item.map(item => ({
                    id: item.product_id,
                    quantity: item.quantity,
                    name: item.product.name,
                    price: item.product.price
                }))
            }));
            const response = {
                data: transformed,
                statusCode: 200,
            };
            if (number_of_data > limit) {
                response.pagination = {
                    limit: limit,
                    offset: offset,
                    total_items: number_of_data,
                    total_page: Math.ceil(number_of_data / page)
                };
            }
            return response;
        }
        catch (error) {
            console.error('Sequelize error:', error);
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
            throw new common_1.BadRequestException(error.message || 'Something went wrong');
        }
    }
    async updateCart(params, body) {
        try {
            let message;
            const body_user = Number(body.user);
            const cart = await cart_model_1.Cart.findOne({
                where: { 'id': params.cart, 'is_ordered': false, 'user_id': body_user },
                nest: false,
                include: [{
                        model: cartItem_model_1.CartItem,
                        attributes: ['product_id', 'quantity', 'id'],
                        where: { 'product_id': params.product }
                    }]
            });
            if (!cart) {
                message = 'No product exist in cart';
            }
            const cartItem = cart?.dataValues.cart_item[0];
            await cartItem.update({ quantity: params.quantity });
            console.log('update cart item', cart?.dataValues.cart_item[0], 'quantity: ', params.quantity);
            message = 'true';
            const statusCode = 200;
            const response = {
                message,
                statusCode
            };
            return response;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
}
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map