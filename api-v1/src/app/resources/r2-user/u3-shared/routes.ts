import { Routes } from "@nestjs/core";
import { SharedModule } from "./shared.module";
import { CityModule } from "./s1-city/city.module";

export const SharedRoute : Routes = [
    {
        path : '/',
        module: SharedModule,
    },
    {
        path : '/',
        module: CityModule,
    }
]