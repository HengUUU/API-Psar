import { Sequelize } from "sequelize-typescript";
import sequelizeConfig from "src/config/sequelize.config";
import { Village } from "../models/location/village.model";
import { Seeder } from "./seeder";
class Migration {

    private _sequelize : Sequelize

    constructor(){
        this._sequelize = new Sequelize(sequelizeConfig)
    }

    public async dropandCreateTable(){
        try{
            await this.authenticate()
            await this.sync()
        } catch (err) {
            console.log("Error : ", err)
        }
    }

    private async authenticate(){
        try{
            await this._sequelize.authenticate();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    private async sync(){
        try{
            await this._sequelize.sync({force : true})
            console.log('\x1b[32m%s\x1b[0m', 'Migrate Successfully')
        }  catch (err) {
            // console.log("Error : ", err)
            this.handleMigrationError(err)
        }
    }

    private handleMigrationError(error: Error){
        console.log('\x1b[31m%s\x1b[0m', error.message)
        process.exit(0)
    }
}
const migration = new Migration()
migration.dropandCreateTable()

