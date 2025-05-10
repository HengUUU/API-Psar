import { Routes } from "@nestjs/core";
// ================================================================= Custom Library
import { AuthModule } from "./module";

// ================================================================= setup routes
export const authRoutes: Routes = [
    {
        path: '/',
        module: AuthModule
    }
]