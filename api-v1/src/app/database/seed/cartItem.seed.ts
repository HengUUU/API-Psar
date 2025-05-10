import { CartItem } from "src/app/models/transaction/cartItem.model";

export class CartItemSeeder{

    public static seed = async () => {
            try {
                await this.seedInventory();
            } catch (err) {
                console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Items in the cart', err)
            }
        }
    
        private static async seedInventory(){
            try {
                await CartItem.bulkCreate(cartItems);
                console.log("Sucessfully seeded location stores to database");
            } catch (err) {
                console.log("Problem when seeding CartItemSeeder", err);
            }
        }
} 

const cartItems = [
    {'id': 1, 'product_id': 1, 'cart_id': 1, 'quantity': 3},
    {'id': 2, 'product_id': 4, 'cart_id': 1, 'quantity': 1},
    {'id': 3, 'product_id': 2, 'cart_id': 1, 'quantity': 2},
    {'id': 4, 'product_id': 5, 'cart_id': 1, 'quantity': 5},
    {'id': 5, 'product_id': 8, 'cart_id': 2, 'quantity': 10},
    {'id': 6, 'product_id': 9, 'cart_id': 3, 'quantity': 8},
    {'id': 7, 'product_id': 18, 'cart_id': 3, 'quantity': 5},
]
