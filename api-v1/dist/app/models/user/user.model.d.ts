import { Model } from 'sequelize-typescript';
import { Cart } from '../transaction/cart.model';
import { Payment } from '../transaction/payment.model';
declare class User extends Model {
    phoneNumber: string;
    password: string;
    role: string;
    cart: Cart[];
    payment: Payment[];
}
export default User;
