//======================> Core Libraries
import { Routes } from "@nestjs/core";

import { authRoutes } from "./app/resources/auth/auth/route";
import { UserRoutes } from "./app/resources/r2-user/routes";
import { CartRoute } from "./app/resources/r2-user/u2-cart/route";

export const appRoutes: Routes = [{
    path: 'api',
    children: [
        {
            path: 'v1',
            children: [
                {
                    path: 'auth',
                    children: authRoutes,
                },
                {
                    path: 'user',
                    children: UserRoutes,
                },
            ]
        }
    ]
}]