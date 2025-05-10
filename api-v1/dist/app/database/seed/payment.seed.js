"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSeeder = void 0;
const payment_model_1 = require("../../models/transaction/payment.model");
class PaymentSeeder {
    static seed = async () => {
        try {
            await this.seedInventory();
        }
        catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed payment', err);
        }
    };
    static async seedInventory() {
        try {
            await payment_model_1.Payment.bulkCreate(payments);
            console.log("Sucessfully seeded location stores to database");
        }
        catch (err) {
            console.log("Problem when seeding payment", err);
        }
    }
}
exports.PaymentSeeder = PaymentSeeder;
const payments = [
    { id: 1, payment_type: 'card', payment_status: 'paid', user_id: 1, cart_id: 1 },
    { id: 2, payment_type: 'card', payment_status: 'pending', user_id: 1, cart_id: 2 },
];
//# sourceMappingURL=payment.seed.js.map