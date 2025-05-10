import { Payment } from "src/app/models/transaction/payment.model";

export class PaymentSeeder{

    public static seed = async () => {
            try {
                await this.seedInventory();
            } catch (err) {
                console.log('\x1b[32m%s\x1b[0m', 'Unable to seed payment', err)
            }
        }
    
        private static async seedInventory(){
            try {
                await Payment.bulkCreate(payments);
                console.log("Sucessfully seeded location stores to database");
            } catch (err) {
                console.log("Problem when seeding payment", err);
            }
        }
} 

const payments = [
    {id: 1, payment_type: 'card', payment_status: 'paid', user_id: 1, cart_id: 1},
    {id: 2, payment_type: 'card', payment_status: 'pending', user_id: 1, cart_id: 2},
    // {id: 3, payment_type: 'cash', payment_status: 'pending', user_id: 1, cart_id: 3},
]