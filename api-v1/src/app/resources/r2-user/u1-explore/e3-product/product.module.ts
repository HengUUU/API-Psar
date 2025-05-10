import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

// import { ExploreModule } from "./explore.module";

@Module({
    controllers : [ProductController],
    providers   : [ProductService]
})

export class CategoryModule{}