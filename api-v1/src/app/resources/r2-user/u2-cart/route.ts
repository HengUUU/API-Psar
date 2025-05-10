import { Routes } from "@nestjs/core";
import { CartModule } from "./cart.module";

export const CartRoute : Routes = [
    {
        path: '/',
        module: CartModule,
    }
]