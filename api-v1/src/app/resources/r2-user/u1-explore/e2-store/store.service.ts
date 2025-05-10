import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Category } from "src/app/models/store/category.model";
import { Inventory } from "src/app/models/store/inventory.model";
import { Product } from "src/app/models/store/product.model";
import { Store } from "src/app/models/store/store.model";
import { APIresponse } from "src/shared/interface/response";

@Injectable()
export class StoreService{

    async getDataStore(params : {
        limit   ?: number
        page    ?: number
    }) : Promise<APIresponse>{

        try{
            
            //Ensure that the pagination is in correct order
            const page = Math.max(params.page ?? 1)
            const limit = Math.max(params.limit ?? 10)
            const offset = (page - 1) * limit;
            
            //Query the data
            const {rows: data, count: number_of_data} = await Store.findAndCountAll({
                attributes: [
                    'id',
                    'name',
                ],
                limit: limit,
                offset: offset,
                order : [['created_at', 'DESC']] 
            });

            if(data.length === 0){
                return {
                    data : []
                }
            }

            const response : APIresponse = {
                data:  data,
                statusCode: 200,
            }

            if(number_of_data > limit){
                response.pagination = {
                    limit: limit,
                    offset : offset,
                    total_items : number_of_data,
                    total_page  : Math.ceil(number_of_data/page) 
                }
            }
        
            return response

        } catch (err) {
            console.log(err)
            throw new BadRequestException(err);
        }
    }
}