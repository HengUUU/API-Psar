import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { JwtService } from "../jwt/jwt.service";
export declare class UserMiddleware implements NestMiddleware {
    private readonly jwtService;
    private readonly logger;
    constructor(jwtService: JwtService);
    use(req: Request, res: Response, next: NextFunction): void;
}
