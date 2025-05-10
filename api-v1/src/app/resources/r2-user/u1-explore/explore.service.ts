import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { Category } from "src/app/models/store/category.model";
import { Inventory } from "src/app/models/store/inventory.model";
import { Product } from "src/app/models/store/product.model";
import { Store } from "src/app/models/store/store.model";
import { APIresponse } from "src/shared/interface/response";

@Injectable()
export class ExploreService{

    //Get all Categories to show on the list
    // async getDataCategory(params: {
    //     limit?: number,
    //     page?: number,
    // }) :Promise<APIresponse>{

        
    //     try{
            
    //         //Ensure that the pagination is in correct order
    //         const page = Math.max(params.page ?? 1)
    //         const limit = Math.max(params.limit ?? 10)
    //         const offset = (page - 1) * limit;
            
    //         //Query the data
    //         const {rows: data, count: number_of_data} = await Category.findAndCountAll({
    //             attributes: [
    //                 'id',
    //                 'name',
    //             ],
    //             limit: params.limit,
    //             offset: offset, 
    //         });

    //         if(data.length === 0){
    //             return {
    //                 data : []
    //             }
    //         }

    //         const response : APIresponse = {
    //             data:  data,
    //             statusCode: 200,
    //         }

    //         if(number_of_data > limit){
    //             response.pagination = {
    //                 limit: limit,
    //                 offset : offset,
    //                 total_items : number_of_data,
    //                 total_page  : Math.ceil(number_of_data/page) 
    //             }
    //         }

    //         return response;
    //   } catch(err) {
    //         console.log(err)
    //         throw new BadRequestException(err.message)
    //   } 
    // }



    //get all store to show the name on explore page
    // async getDataStore(params : {
    //     limit   ?: number
    //     page    ?: number
    // }) : Promise<APIresponse>{

    //     try{
            
    //         //Ensure that the pagination is in correct order
    //         const page = Math.max(params.page ?? 1)
    //         const limit = Math.max(params.limit ?? 10)
    //         const offset = (page - 1) * limit;
            
    //         //Query the data
    //         const {rows: data, count: number_of_data} = await Store.findAndCountAll({
    //             attributes: [
    //                 'id',
    //                 'name',
    //             ],
    //             limit: limit,
    //             offset: offset,
    //             order : [['created_at', 'DESC']] 
    //         });

    //         if(data.length === 0){
    //             return {
    //                 data : []
    //             }
    //         }

    //         const response : APIresponse = {
    //             data:  data,
    //             statusCode: 200,
    //         }

    //         if(number_of_data > limit){
    //             response.pagination = {
    //                 limit: limit,
    //                 offset : offset,
    //                 total_items : number_of_data,
    //                 total_page  : Math.ceil(number_of_data/page) 
    //             }
    //         }
        
    //         return response

    //     } catch (err) {
    //         console.log(err)
    //         throw new BadRequestException(err);
    //     }
    // }

    //get product data by either category 
    async getDataProductCategory(params: {
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

    //query product with detail : 
    //================================================> 'Quantity', 'Name', 'Price', 'Description', 'Store' <======================================= to display 
    async getProductDetail(params : {
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

    //list all product by store
    async getDataProductbyStore(params: {
        store    : number
        limit   ?: number
        page    ?: number
    }) : Promise<any> {

        try{

            console.log(params.store)

            //Ensure that the pagination is in correct order
            const page   = Math.max(params.page ?? 1)
            const limit  = Math.max(params.limit ?? 10)
            const offset = (page - 1) * limit;

            //Query the data
            const {rows: data, count: number_of_data} = await Product.findAndCountAll({
                attributes : ['id', 'name', 'price', 'description'],
                offset: offset,
                nest  : true,
                limit : limit,
                raw   : true,
                include: [{
                    model: Inventory,
                    attributes: ['store_id'],
                    where   : { store_id : params.store},
                    include : [{
                        model: Store,
                        attributes: ['id', 'name'],
                        // where : {
                            // id : params.store
                        // }
                    }]
                }],
            });
            
            console.log(data)

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


    //query all product by both category and store
    async getDataProductbyStoreandCategory(params : {
        store           : number,
        category        : number,
        limit          ?: number,
        page           ?: number,
    }) : Promise<any>{

        const page  = Math.max(params.page ?? 1)
        const limit = Math.max(params.limit?? 10)
        const offset = ( page - 1 ) * limit

        try{
            const where : any = {}

            if(params?.store){
                where['inventory.store_id'] = params.store
            }

            if(params?.category){
                where['product.category']   = params.category
            }

            console.log(where)
            const {rows : data, count :  number_of_data } = await Product.findAndCountAll({
                attributes  : ['id', 'name', 'price', 'description', 'quantity'],
                offset      : offset,
                limit       : limit,
                nest        : false,
                raw         : true,
                include     : [
                    {
                        model       : Category,
                        attributes  : ['name'],
                        required    : !!params.category,
                    },
                    {
                        model       : Inventory,
                        attributes  : ['store_id'],
                        include         : [{
                            model       : Store,
                            attributes  : ['name'],
                            required    : !!params.store,
                        },
                        ],
                    }
                ],
                // where       : where,
            })


            console.log(data)
            const transformed = data.map(item => ({
                id              : item.id,
                name            : item.name,
                price           : item.price,
                quantity        : item.quantity,
                description     : item.description,
                // store_id: item['inventory.store_id'], // Accessing directly
                store_name: item['inventory.store.name'], // Accessing directly
                category_name: item['category.name'],
            }))

            return transformed
        } catch (err) {
            throw new BadRequestException(err?.message)
        }
    }
}