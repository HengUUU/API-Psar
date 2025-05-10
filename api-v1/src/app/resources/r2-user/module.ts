import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ExploreModule } from "./u1-explore/explore.module";
import { CartModule } from "./u2-cart/cart.module";
import { SharedModule } from "./u3-shared/shared.module";
import { UserMiddleware } from "../auth/middleware/user.middleware";
import { JwtService } from "../auth/jwt/jwt.service";

@Module({
    providers : [JwtService],
    imports : [
        ExploreModule,
        CartModule,
        SharedModule,
    ]
})

export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserMiddleware)
                .forRoutes({path: '/api/v1/user/*', method: RequestMethod.ALL})
    }
}   