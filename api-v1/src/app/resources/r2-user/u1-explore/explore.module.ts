import { Module } from "@nestjs/common";
import { ExploreController } from "./explore.controller";
import { ExploreService } from "./explore.service";

// import { ExploreModule } from "./explore.module";

@Module({
    controllers : [ExploreController],
    providers   : [ExploreService]
})

export class ExploreModule{}