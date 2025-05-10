import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Category } from "src/app/models/store/category.model";
import { Inventory } from "src/app/models/store/inventory.model";
import { Product } from "src/app/models/store/product.model";
import { Store } from "src/app/models/store/store.model";
import { APIresponse } from "src/shared/interface/response";

@Injectable()
export class ProductService{


    async getbyCategory(params: {
        category : number
        limit   ?: number
        page    ?: number
    }) : Promise<any> {

        try{

            //Ensure that the pagination is in correct order
            const page   = Math.max(params.page ?? 1)
            const limit  = Math.max(params.limit ?? 10)
            const offset = (page - 1) * limit;

            console.log(params.category)
            //Query the data
            const {rows: data, count: number_of_data} = await Product.findAndCountAll({
                
                attributes : ['id', 'name', 'price', 'description'],
                offset: offset,
                nest  : false,
                limit : limit,
                raw   : true,
                include: [{
                    model: Category,
                    attributes: ['id', 'name'],
                    where     : { id : params.category }
                }],
            });
            
            const transformed = data.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                description: item.description,
                category: item['category.name'], // read from flat key
            }));
            
            const response: APIresponse = {
                data : transformed ,
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


    async view(params : {
        product     : number
    }) : Promise<APIresponse>{

        //we will query product with the store name and its location
        try{

            const data = await Product.findOne({
                where      : { id : params.product },
                raw        : true,
                nest       : true,
                attributes : ['id', 'name', 'price', 'description', 'quantity', 'inventory_id'],
                include    : [{
                    model  : Inventory,
                    attributes : ['store_id'],
                    include    : [{
                        model  : Store,
                        attributes : ['id', 'name']
                }]
                }]  
            })

            if (!data) {
                throw new NotFoundException("Product not found");
              }

              
            const transformed = {
                id: data.id,
                name: data.name,
                price: data.price,
                quantity: data.quantity,
                description: data.description,
                store_id: data.inventory?.store?.id,
                store_name: data.inventory?.store?.name
            };

            const reponse = {
                data       : transformed,
                statusCode : 200,
            }

            return reponse
        } catch (err) {
            console.log(err)
            throw new BadRequestException(err?.message)
        }
    }
}