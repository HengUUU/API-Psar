import { Module } from "@nestjs/common";
import { StoreController } from "./store.controller";
import { StoreService } from "./store.service";

// import { ExploreModule } from "./explore.module";

@Module({
    controllers : [StoreController],
    providers   : [StoreService]
})

export class StoreModule{}