
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import User from 'src/app/models/user/user.model';

import * as glob from 'glob';
import * as path from 'path';
// import path = require('path');

import { District } from 'src/app/models/location/district.model';
import { Commune } from 'src/app/models/location/commune.model';
import { City } from 'src/app/models/location/city.model';
import { Village } from 'src/app/models/location/village.model';
import Location from 'src/app/models/user/location.model';
import { Store } from 'src/app/models/store/store.model';
import { Inventory } from 'src/app/models/store/inventory.model';
import { Product } from 'src/app/models/store/product.model';
import { Category } from 'src/app/models/store/category.model';
import { ProductCategory } from 'src/app/models/store/productCategory.model';
import { Cart } from 'src/app/models/transaction/cart.model';
import { CartItem } from 'src/app/models/transaction/cartItem.model';
import { Payment } from 'src/app/models/transaction/payment.model';
dotenv.config()

const sequelizeConfig : SequelizeModuleOptions = {
    dialect : process.env.DB_CONNECTION as any, 
    host    : process.env.DB_HOST,
    port    : Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // models: [__dirname + '../app/models/**/*.model.ts'],
    models  : [User, District, Commune, 
        City, Village, Location, 
        Store, Inventory, Product, 
        Category, ProductCategory,  Cart, CartItem,
        Payment],
    synchronize : true,
    logging : false,
};

// class show{
    
//     showdir(){
//             const pathdir = path.join(__dirname  + '../app/models/**/*.model.ts')        
//             console.log(pathdir)
//             console.log(path.join(process.cwd() + '/app/models/**/*.model.ts'))
//             console.log(models)
//         }
//     }
// const dir = new show 
// dir.showdir()


export default sequelizeConfig