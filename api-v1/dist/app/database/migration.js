"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_config_1 = require("../../config/sequelize.config");
class Migration {
    _sequelize;
    constructor() {
        this._sequelize = new sequelize_typescript_1.Sequelize(sequelize_config_1.default);
    }
    async dropandCreateTable() {
        try {
            await this.authenticate();
            await this.sync();
        }
        catch (err) {
            console.log("Error : ", err);
        }
    }
    async authenticate() {
        try {
            await this._sequelize.authenticate();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    async sync() {
        try {
            await this._sequelize.sync({ force: true });
            console.log('\x1b[32m%s\x1b[0m', 'Migrate Successfully');
        }
        catch (err) {
            this.handleMigrationError(err);
        }
    }
    handleMigrationError(error) {
        console.log('\x1b[31m%s\x1b[0m', error.message);
        process.exit(0);
    }
}
const migration = new Migration();
migration.dropandCreateTable();
//# sourceMappingURL=migration.js.map