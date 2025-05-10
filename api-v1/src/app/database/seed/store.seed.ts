import { Store } from "src/app/models/store/store.model";

export class StoreSeeder{
    public static seed = async () => {
        try {
            await this.seedStore();
        } catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed store', err)
        }
    }

    private static async seedStore(){
        try {
            console.log('hello wolrd')
            await Store.bulkCreate(stores);
            console.log("Sucessfully seeded stores to database");
        } catch (err) {
            // await this.handleSeedingError(err)
            console.log(err)
        }
    }

    private async handleSeedingError(error: Error){
        console.log('\x1b[32m%s\x1b[0m', error.message);
        process.exit(0)
    }
}

const stores = [
    {id : 1, name: 'Store Dalin', phoneNumber: '088574653'},
    {id : 2, name: 'Store Vuthy', phoneNumber: '061121689'},
    {id : 3, name: 'Store Dalin', phoneNumber: '012168867'},
    {id : 4, name: 'Store Sokha', phoneNumber: '022499030'},
    {id : 5, name: 'Store Dara', phoneNumber: '017148287'},
    {id : 6, name: 'Store Sokha', phoneNumber: '012012456'},
    {id : 7, name: 'Store Rith', phoneNumber: '018383625'},
    {id : 8, name: 'Store Sarin', phoneNumber: '018846918'},
    {id : 9, name: 'Store Dara', phoneNumber: '016344341'},
    {id : 10, name: 'Store Kanha', phoneNumber: '089762784'},
    {id : 11, name: 'Store KimHor', phoneNumber: '088530622'},
    {id : 12, name: 'Store Niron', phoneNumber: '097268482'},
    {id : 13, name: 'Store Vuthy', phoneNumber: '011686370'},
    {id : 14, name: 'Store Niron', phoneNumber: '097313212'},
    {id : 15, name: 'Store Vuthy', phoneNumber: '015597626'},
    {id : 16, name: 'Store Rith', phoneNumber: '018112053'},
    {id : 17, name: 'Store KimHor', phoneNumber: '061031086'},
    {id : 18, name: 'Store Seyha', phoneNumber: '022919499'},
    {id : 19, name: 'Store Sarin', phoneNumber: '018814673'},
    {id : 20, name: 'Store Vuthy', phoneNumber: '061521437'},
    {id : 21, name: 'Store Seyha', phoneNumber: '089894178'},
    {id : 22, name: 'Store Nita', phoneNumber: '018573436'},
    {id : 23, name: 'Store Sela', phoneNumber: '022606940'},
    {id : 24, name: 'Store Sochea', phoneNumber: '017588321'},
    {id : 25, name: 'Store Sophal', phoneNumber: '097585986'},
    {id : 26, name: 'Store Niron', phoneNumber: '018415581'},
    {id : 27, name: 'Store Sokun', phoneNumber: '089334323'},
    {id : 28, name: 'Store Sokha', phoneNumber: '088719228'},
    {id : 29, name: 'Store Phalla', phoneNumber: '012333571'},
    {id : 30, name: 'Store Nita', phoneNumber: '017519694'},
    {id : 31, name: 'Store Dara', phoneNumber: '012404004'},
    {id : 32, name: 'Store Niron', phoneNumber: '022389843'},
    {id : 33, name: 'Store Dalin', phoneNumber: '061789224'},
    {id : 34, name: 'Store Sela', phoneNumber: '061179935'},
    {id : 35, name: 'Store Malis', phoneNumber: '089115238'},
    {id : 36, name: 'Store Niron', phoneNumber: '011671281'},
    {id : 37, name: 'Store Vuthy', phoneNumber: '011276071'},
    {id : 38, name: 'Store Sophal', phoneNumber: '061825355'},
    {id : 39, name: 'Store Dalin', phoneNumber: '017407741'},
    {id : 40, name: 'Store Niron', phoneNumber: '018737811'},
    {id : 41, name: 'Store Vanna', phoneNumber: '016680954'},
    {id : 42, name: 'Store Sokha', phoneNumber: '018097811'},
    {id : 43, name: 'Store Malis', phoneNumber: '016284001'},
    {id : 44, name: 'Store Niron', phoneNumber: '016464830'},
    {id : 45, name: 'Store Malis', phoneNumber: '089973327'},
    {id : 46, name: 'Store Sarin', phoneNumber: '097461119'},
    {id : 47, name: 'Store Niron', phoneNumber: '015529430'},
    {id : 48, name: 'Store Nita', phoneNumber: '011658187'},
    {id : 49, name: 'Store Phalla', phoneNumber: '018964284'},
    {id : 50, name: 'Store Rith', phoneNumber: '022365158'}
]