import { District } from "src/app/models/location/district.model"

export class DistrictService{

    async get(): Promise<any>{
        const district  = await District.findAll({
            attributes: ['id', 'name']
        })   
        
        return district
    }

    
}