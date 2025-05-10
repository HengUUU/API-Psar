import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "../jwt/jwt.service";

@Injectable()
export class AuthGuard implements CanActivate{
    
    private readonly logger = new Logger(AuthGuard.name)
    constructor(
            private jwtService : JwtService,
    ){}

    async canActivate(context: ExecutionContext) {

        this.logger.log(AuthGuard.name)

        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;
        const token   = authorization?.split(' ')[1]



        if(!token){
            throw new UnauthorizedException();
        }

        try {
            this.jwtService.verifyToken(token)
            return true;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

}