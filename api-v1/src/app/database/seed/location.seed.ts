import Location from "src/app/models/user/location.model";

export class LocationSeeder{
    public static seed = async () => {
        try {
            await this.seedLocation();
        } catch (err) {
            console.log('\x1b[32m%s\x1b[0m', 'Unable to seed Locations store', err)
        }
    }

    private static async seedLocation(){
        try {
            await Location.bulkCreate(locations);
            console.log("Sucessfully seeded location stores to database");
        } catch (err) {
            console.log("Problem when seeding Store", err);
        }
    }
}

const locations = [
    {id: 1, city: 2, district: 6, commune: 6,  village: 5, store_id: 1 },
    {id: 2, city: 2, district: 6, commune: 6,  village: 6, store_id: 2 },
    {id: 3, city: 2, district: 6, commune: 6,  village: 7, store_id: 3 },
    {id: 4, city: 2, district: 6, commune: 6,  village: 8, store_id: 4 },
    {id: 5, city: 2, district: 6, commune: 6,  village: 9, store_id: 5 },
    {id: 6, city: 2, district: 6, commune: 6,  village: 10, store_id: 6 },
    {id: 7, city: 2, district: 6, commune: 6,  village: 11, store_id: 7 },
    {id: 8, city: 2, district: 6, commune: 6,  village: 12, store_id: 8 },
    {id: 9, city: 2, district: 6, commune: 6,  village: 13, store_id: 9 },
    {id: 10, city: 2, district: 6, commune: 6,  village: 14, store_id: 10 },
    {id: 11, city: 2, district: 6, commune: 7,  village: 15, store_id: 11 },
    {id: 12, city: 2, district: 6, commune: 7,  village: 16, store_id: 12 },
    {id: 13, city: 2, district: 6, commune: 7,  village: 17, store_id: 13 },
    {id: 14, city: 2, district: 6, commune: 7,  village: 18, store_id: 14 },
    {id: 15, city: 2, district: 6, commune: 7,  village: 19, store_id: 15 },
    {id: 16, city: 2, district: 6, commune: 7,  village: 20, store_id: 16 },
    {id: 17, city: 2, district: 6, commune: 7,  village: 21, store_id: 17 },
    {id: 18, city: 2, district: 6, commune: 8,  village: 22, store_id: 18 },
    {id: 19, city: 2, district: 6, commune: 8,  village: 23, store_id: 19 },
    {id: 20, city: 2, district: 6, commune: 8,  village: 24, store_id: 20 },
    {id: 21, city: 2, district: 6, commune: 8,  village: 25, store_id: 21 },
    {id: 22, city: 2, district: 6, commune: 8,  village: 26, store_id: 22 },
    {id: 23, city: 2, district: 6, commune: 8,  village: 27, store_id: 23 },
    {id: 24, city: 2, district: 6, commune: 9,  village: 28, store_id: 24 },
    {id: 25, city: 2, district: 6, commune: 9,  village: 29, store_id: 25 },
    {id: 26, city: 2, district: 6, commune: 9,  village: 30, store_id: 26 },
    {id: 27, city: 2, district: 6, commune: 9,  village: 31, store_id: 27 },
    {id: 28, city: 2, district: 6, commune: 9,  village: 32, store_id: 28 },
    {id: 29, city: 2, district: 7, commune: 10,  village: 33, store_id: 29 },
    {id: 30, city: 2, district: 7, commune: 10,  village: 34, store_id: 30 },
    {id: 31, city: 2, district: 7, commune: 10,  village: 35, store_id: 31 },
    {id: 32, city: 2, district: 7, commune: 10,  village: 36, store_id: 32 },
    {id: 33, city: 2, district: 7, commune: 11,  village: 37, store_id: 33 },
    {id: 34, city: 2, district: 7, commune: 11,  village: 38, store_id: 34 },
    {id: 35, city: 2, district: 7, commune: 11,  village: 39, store_id: 35 },
    {id: 36, city: 2, district: 7, commune: 12,  village: 40, store_id: 36 },
    {id: 37, city: 2, district: 7, commune: 12,  village: 41, store_id: 37 },
    {id: 38, city: 2, district: 7, commune: 12,  village: 42, store_id: 38 },
    {id: 39, city: 2, district: 7, commune: 13,  village: 43, store_id: 39 },
    {id: 40, city: 2, district: 7, commune: 13,  village: 44, store_id: 40 },
    {id: 41, city: 2, district: 7, commune: 13,  village: 45, store_id: 41 },
    {id: 42, city: 2, district: 7, commune: 14,  village: 46, store_id: 42 },
    {id: 43, city: 2, district: 7, commune: 14,  village: 47, store_id: 43 },
    {id: 44, city: 2, district: 7, commune: 14,  village: 48, store_id: 44 },
    {id: 45, city: 2, district: 7, commune: 15,  village: 49, store_id: 45 },
    {id: 46, city: 2, district: 7, commune: 15,  village: 50, store_id: 46 },
    {id: 47, city: 2, district: 7, commune: 15,  village: 51, store_id: 47 },
    {id: 48, city: 2, district: 7, commune: 15,  village: 52, store_id: 48 },
    {id: 49, city: 2, district: 7, commune: 16,  village: 53, store_id: 49 },
    {id: 50, city: 2, district: 7, commune: 16,  village: 54, store_id: 50 },

]
