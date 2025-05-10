import { Sequelize } from "sequelize-typescript";
import sequelizeConfig from "src/config/sequelize.config";

//======================Seeder
import { UserSeeder } from "./seed/user.seed";
import { StoreSeeder } from "./seed/store.seed";
import { CitySeeder } from "./seed/address.seed";
import { LocationSeeder } from "./seed/location.seed";
import { ProductSeeder } from "./seed/product.seed";
import { CategorySeeder } from "./seed/category.seed";
import { ProductCategorySeeder } from "./seed/productCategory.seed";
import { InventorySeeder } from "./seed/inventory.seed";
import { CartSeeder } from "./seed/cart.seed";
import { CartItemSeeder } from "./seed/cartItem.seed";
import { PaymentSeeder } from "./seed/payment.seed";

export class Seeder {

    private sequelize : Sequelize;
    
    constructor(){
        this.sequelize = new Sequelize(sequelizeConfig);     
    }

    private async dropandSeedDatabase(){
        await this.sequelize.sync({ force: true})
    }

    private async seedAllTable(){
        try {   
            await UserSeeder.seed()
            await StoreSeeder.seed()
            await CitySeeder.seed()
            await LocationSeeder.seed()
            await InventorySeeder.seed()
            await ProductSeeder.seed()
            await CategorySeeder.seed()
            await ProductCategorySeeder.seed()
            await CartItemSeeder.seed()
            await CartSeeder.seed()
            await PaymentSeeder.seed()
            console.log('\x1b[32m%s\x1b[0m', 'Successfully Seed all data')
        } catch (err) {
            await this.handleSeedingError(err)
        }
    }

    private async handleSeedingError(error: Error) {
        console.log('\x1b[32m%s\x1b[0m', error.message);
        process.exit(0);
    }

    public async startSeeding(){
        try{
            await this.dropandSeedDatabase();
            await this.seedAllTable();
        } catch (err) {
            await this.handleSeedingError(err)
        }
    }

}

const seeder = new Seeder()
seeder.startSeeding()