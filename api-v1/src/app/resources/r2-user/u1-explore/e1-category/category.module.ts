import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";

// import { ExploreModule } from "./explore.module";

@Module({
    controllers : [CategoryController],
    providers   : [CategoryService]
})

export class CategoryModule{}