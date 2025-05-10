import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import * as bcrypt from 'bcryptjs';
import { UserRole } from '../enum/role.enum';
import { Cart } from '../transaction/cart.model';
import { Payment } from '../transaction/payment.model';
@Table({
  underscored : true,
  // createdAt   : 'created_at',
  // updatedAt   : 'updated_at',
  // deletedAt   : 'deleted_at',
  // paranoid    : true,
  freezeTableName : true,
})
class User extends Model{
  
  // @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })                      declare id: number;
  //using declare because sequelize already give id to every table


  @Column({type: DataType.STRING, allowNull: false, unique: true})                                phoneNumber: string;


  @Column({type: DataType.STRING, allowNull: false,  set(value: string) 
    {const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(value, salt);
        this.setDataValue('password', hash);
    },
  })                                                                                              password: string;
    
  @Column({ type: DataType.ENUM(...Object.values(UserRole)), allowNull: false, validate : {isIn: [['SELLER', 'USER']]} })                   role : string;

  @HasMany(() => Cart, {foreignKey : 'user_id'})                                                  cart : Cart[]
  @HasMany(() => Payment, {foreignKey : 'user_id'})                                               payment : Payment[]

}

export default User;

