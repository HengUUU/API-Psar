import { City } from "src/app/models/location/city.model";

export class CityService{

    async get(): Promise<any>{
        const city  = await City.findAll({
            attributes: ['id', 'name']
        })   
        
        return city
    }

    
}