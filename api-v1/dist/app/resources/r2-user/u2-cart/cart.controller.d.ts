import { CartService } from "./cart.service";
export declare class CartController {
    private readonly service;
    constructor(service: CartService);
    createCart(user: number, product: number, quantity: number): Promise<any>;
    updateCart(user: number, payment_method: string, cart: number): Promise<{
        message: string;
        statusCode: number;
    }>;
    getCart(user: number, limit?: number, page?: number): Promise<any>;
    getCartUser(user: number, limit?: number, page?: number): Promise<any>;
    Update(cart: number, product: number, quantity: number, user: number): Promise<any>;
}
