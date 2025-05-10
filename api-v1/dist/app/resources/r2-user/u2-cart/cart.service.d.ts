export declare class CartService {
    createCartforProduct(body: {
        product: number;
        user: number;
        quantity: number;
    }, params: {}): Promise<any>;
    confirmOrder(body: {
        user: number;
        payment_method: string;
    }, params: {
        cart: number;
    }): Promise<{
        message: string;
        statusCode: number;
    }>;
    getCart(body: {
        user: number;
    }, params: {
        page?: number;
        limit?: number;
    }): Promise<any>;
    getCartDetail(body: {
        user: number;
    }, params: {
        page?: number;
        limit?: number;
    }): Promise<any>;
    updateCart(params: {
        cart: number;
        product: number;
        quantity: number;
    }, body: {
        user: number;
    }): Promise<any>;
}
