import { Routes } from "@nestjs/core";

import { ExploreModule } from "./explore.module";

export const productRoutes : Routes = [{                
    path: '/',
    module: ExploreModule,
}]