import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "../jwt/jwt.service";
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private readonly logger;
    constructor(jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
