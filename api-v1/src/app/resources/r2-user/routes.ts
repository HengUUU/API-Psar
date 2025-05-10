import { Routes } from "@nestjs/core";

import { ExploreModule } from "./u1-explore/explore.module";
import { SharedModule } from "./u3-shared/shared.module";
import { CartModule } from "./u2-cart/cart.module";
export const UserRoutes : Routes = [
    {
        path: '/',
        module: ExploreModule,
    },
    {
        path: '/',
        module: CartModule,
    },
    {
        path: '/',
        module: SharedModule,
    }
]