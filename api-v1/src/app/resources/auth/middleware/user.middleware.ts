import { BadRequestException, Injectable, Logger, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { JwtService } from "../jwt/jwt.service";
import { CartService } from "../../r2-user/u2-cart/cart.service";


@Injectable()
export class UserMiddleware implements NestMiddleware{
    
    private readonly logger = new Logger(UserMiddleware.name)

    constructor(
        private readonly jwtService : JwtService,
    ){}

    use(req: Request, res: Response, next: NextFunction){
        
        //Logger for logging to see it is testing the middleware
        this.logger.log(UserMiddleware.name)

        const headers = req.headers
        
        const token = headers?.authorization?.split(' ')[1]
        // const token   = headers?.authorization?.split('')[1]
        if(!token){
            throw new UnauthorizedException('No Token in request')
        } 

        let decoded;
        try {
            decoded = this.jwtService.verifyToken(token);
        } catch (error) {
            throw new UnauthorizedException(error.message);     
        }


        if(decoded.user.role === 'user'){
            next()
        } else {
            throw new UnauthorizedException('Access Denied. You are not allow to perform the action')
        }
    }
}