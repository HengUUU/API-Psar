"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSeeder = void 0;
const product_model_1 = require("../../models/store/product.model");
class ProductSeeder {
    static seed = async () => {
        try {
            await this.seedInventory();
        }
        catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Locations store', err);
        }
    };
    static async seedInventory() {
        try {
            await product_model_1.Product.bulkCreate(products);
            console.log("Sucessfully seeded location stores to database");
        }
        catch (err) {
            console.log("Problem when seeding Store", err);
        }
    }
}
exports.ProductSeeder = ProductSeeder;
const products = [
    { id: 1, name: 'ត្រសក់', inventory_id: 3, price: 1500, description: 'បន្លែត្រសក់ស្រស់សម្រាប់ធ្វើស៊ុបឬបាយសាច់ជ្រូក' },
    { id: 2, name: 'ប៉េងប៉ោះ', inventory_id: 1, price: 1800, description: 'បន្លែសម្រាប់ធ្វើស៊ុប ឬសម្លរកកូរជាមួយសាច់' },
    { id: 3, name: 'ខាត់ណា', inventory_id: 4, price: 2000, description: 'សម្រាប់ស៊ុប ឬឆាបន្លែស្រួយ' },
    { id: 4, name: 'សណ្តែកគួរ', inventory_id: 2, price: 2200, description: 'អាចចម្អិនជាសម្លរឬឆាជាមួយសាច់ជ្រូក' },
    { id: 5, name: 'ម្ទេសខៀវ', inventory_id: 5, price: 1000, description: 'សម្រាប់ធ្វើទឹកជ្រលក់ ឬសម្លម្ជូរ' },
    { id: 6, name: 'ខ្ទឹមស', inventory_id: 1, price: 2500, description: 'គ្រឿងទេសសំខាន់សម្រាប់ចំអិនម្ហូបជាច្រើន' },
    { id: 7, name: 'ខ្ទឹមក្រហម', inventory_id: 3, price: 2300, description: 'ផ្អែមបន្តិច ប្រើសម្រាប់ចំអិនស៊ុបនិងឆា' },
    { id: 8, name: 'ដំឡូងបារាំង', inventory_id: 4, price: 2700, description: 'សំរាប់ឆាឬចម្អិនជាផេស្តាផងដែរ' },
    { id: 9, name: 'បណ្ដើរ', inventory_id: 2, price: 1500, description: 'បន្លែស្រស់សម្រាប់សម្លឬឆាគ្រឿង' },
    { id: 10, name: 'ផ្លែឈើក្រូចឆ្មារ', inventory_id: 5, price: 1600, description: 'ផ្លែឈើជ្រលក់ឆ្ងាញ់បំផុតសម្រាប់ទឹកជ្រលក់' },
    { id: 11, name: 'ស្លឹកកាផារ', inventory_id: 1, price: 1400, description: 'ប្រើសម្រាប់សម្លរស្លឹកកាផារជាមួយត្រី' },
    { id: 12, name: 'ត្រសក់ពោធិ៍សាត់', inventory_id: 3, price: 1900, description: 'បន្លែស្រុកស្រស់ឆ្ងាញ់' },
    { id: 13, name: 'សណ្តែកបណ្តុះ', inventory_id: 4, price: 1200, description: 'សណ្តែកដែលងាយស្រួលក្នុងចំអិន' },
    { id: 14, name: 'ដំឡូងជ្វា', inventory_id: 2, price: 2000, description: 'ផ្លែដំឡូងជ្វា មានរសជាតិផ្អែម' },
    { id: 15, name: 'ចេកស្ករត្នោត', inventory_id: 5, price: 1800, description: 'ចេកដែលផ្អែមសម្រាប់បញ្ចុកឬបាយបញ្ចុក' },
    { id: 16, name: 'បន្លែរុក្ខជាតិ', inventory_id: 1, price: 2100, description: 'បន្លែស្រស់សម្រាប់សម្លរចិន' },
    { id: 17, name: 'ស្លឹកកាផារខ្មៅ', inventory_id: 3, price: 1500, description: 'ប្រើសម្រាប់សម្លរសាច់ជ្រូកជាមួយស្លឹកកាផារ' },
    { id: 18, name: 'សណ្ដែកកុំភី', inventory_id: 2, price: 1700, description: 'សណ្ដែកស្រស់អាចឆានឬបំពង' },
    { id: 19, name: 'ម្ទេសក្រហម', inventory_id: 4, price: 1300, description: 'សម្រាប់ធ្វើទឹកជ្រលក់ឬសម្លម្ជូរ' },
    { id: 20, name: 'កញ្ចក់ក្រូចឆ្មារ', inventory_id: 5, price: 1600, description: 'គ្រឿងទេសជ្រលក់ឆ្ងាញ់និងពេញនិយម' },
    { id: 21, name: 'ផ្កាស្ពៃ', inventory_id: 1, price: 2400, description: 'បន្លែសម្រាប់ឆាឬសម្លរជាមួយសាច់មាន់' },
    { id: 22, name: 'ខ្ញី', inventory_id: 3, price: 2000, description: 'គ្រឿងទេសសម្រាប់ឆាឬសម្លរមានរសជាតិឈ្ងុយ' },
    { id: 23, name: 'ជីននឹម', inventory_id: 2, price: 1600, description: 'ស្លឹកបន្លែសម្រាប់សម្លរឬឆាគ្រឿង' },
    { id: 24, name: 'ស្ពៃក្តោប', inventory_id: 4, price: 1800, description: 'បន្លែស្រស់សម្រាប់ធ្វើស៊ុបឬឆាសាច់' },
    { id: 25, name: 'ផ្លែខ្នុរ', inventory_id: 5, price: 3000, description: 'ផ្លែឈើផ្អែមឆ្ងាញ់សម្រាប់ធ្វើជាបង្អែម' },
    { id: 26, name: 'ផ្លែឪឡឹក', inventory_id: 1, price: 2500, description: 'ផ្លែឈើសម្រាប់ធ្វើទឹកផ្លែឈើឬបរិភោគស្រស់' },
    { id: 27, name: 'ផ្លែសាវម៉ាវ', inventory_id: 3, price: 2200, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់ជ្រលក់ឬបរិភោគស្រស់' },
    { id: 28, name: 'ផ្លែម្នាស់', inventory_id: 2, price: 2800, description: 'ផ្លែឈើផ្អែមឈ្ងុយសម្រាប់ធ្វើជាបង្អែម' },
    { id: 29, name: 'ផ្លែមៀន', inventory_id: 4, price: 2000, description: 'ផ្លែឈើផ្អែមសម្រាប់បរិភោគឬធ្វើទឹកផ្លែឈើ' },
    { id: 30, name: 'ផ្លែស្ត្របឺរី', inventory_id: 5, price: 3500, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់បង្អែមឬទឹកផ្លែឈើ' },
    { id: 31, name: 'ផ្លែចេកណាំវ៉ា', inventory_id: 1, price: 1900, description: 'ចេកផ្អែមសម្រាប់បរិភោគឬធ្វើបង្អែម' },
    { id: 32, name: 'ផ្លែទទឹម', inventory_id: 3, price: 2600, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់ធ្វើទឹកផ្លែឈើ' },
    { id: 33, name: 'ផ្លែត្របែក', inventory_id: 2, price: 2300, description: 'ផ្លែឈើជូរសម្រាប់ជ្រលក់ឬបរិភោគស្រស់' },
    { id: 34, name: 'ផ្លែល្ហុង', inventory_id: 4, price: 2700, description: 'ផ្លែឈើផ្អែមឈ្ងុយសម្រាប់បរិភោគស្រស់' },
    { id: 35, name: 'ផ្លែអាវ៉ូកាដូ', inventory_id: 5, price: 3200, description: 'ផ្លែឈើសម្រាប់ធ្វើសាឡាត់ឬទឹកផ្លែឈើ' },
    { id: 36, name: 'ផ្លែក្រូចថ្លុង', inventory_id: 1, price: 2100, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់បរិភោគឬធ្វើទឹកផ្លែឈើ' },
    { id: 37, name: 'ផ្លែឆឺរី', inventory_id: 3, price: 4000, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់បង្អែមឬបរិភោគស្រស់' },
    { id: 38, name: 'ផ្លែគីវី', inventory_id: 2, price: 3600, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់សាឡាត់ឬទឹកផ្លែឈើ' },
    { id: 39, name: 'ផ្លែកន្ទុំធំ', inventory_id: 4, price: 2900, description: 'ផ្លែឈើផ្អែមសម្រាប់បរិភោគឬធ្វើបង្អែម' },
    { id: 40, name: 'ផ្លែអម្បូរ', inventory_id: 5, price: 2500, description: 'ផ្លែឈើជូរសម្រាប់ជ្រលក់ឬបរិភោគស្រស់' },
    { id: 41, name: 'ផ្លែទន្លាប់', inventory_id: 1, price: 2200, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់ជ្រលក់ឬទឹកផ្លែឈើ' },
    { id: 42, name: 'ផ្លែផែរ', inventory_id: 3, price: 2800, description: 'ផ្លែឈើផ្អែមសម្រាប់បរិភោគឬសាឡាត់' },
    { id: 43, name: 'ផ្លែប៉ោម', inventory_id: 2, price: 3000, description: 'ផ្លែឈើផ្អែមសម្រាប់បរិភោគឬធ្វើបង្អែម' },
    { id: 44, name: 'ផ្លែទៀប', inventory_id: 4, price: 2600, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់ជ្រលក់ឬបរិភោគស្រស់' },
    { id: 45, name: 'ផ្លែផ្លែប័រ', inventory_id: 5, price: 3400, description: 'ផ្លែឈើផ្អែមសម្រាប់បរិភោគឬធ្វើសាឡាត់' },
    { id: 46, name: 'ផ្លែស្តៅ', inventory_id: 1, price: 2700, description: 'ផ្លែឈើផ្អែមសម្រាប់បរិភោគឬធ្វើទឹកផ្លែឈើ' },
    { id: 47, name: 'ផ្លែអង្គរុយ', inventory_id: 3, price: 3100, description: 'ផ្លែឈើផ្អែមសម្រាប់បរិភោគឬធ្វើបង្អែម' },
    { id: 48, name: 'ផ្លែផ្កាប៉ុល', inventory_id: 2, price: 2900, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់ទឹកផ្លែឈើឬសាឡាត់' },
    { id: 49, name: 'ផ្លែថ្លុង', inventory_id: 4, price: 2500, description: 'ផ្លែឈើផ្អែមសម្រាប់បរ�ិភោគឬធ្វើបង្អែម' },
    { id: 50, name: 'ផ្លែក្រូចពោន', inventory_id: 5, price: 3200, description: 'ផ្លែឈើជូរផ្អែមសម្រាប់ទឹកផ្លែឈើឬបរិភោគស្រស់' }
];
//# sourceMappingURL=product.seed.js.map