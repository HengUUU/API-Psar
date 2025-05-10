import User from "src/app/models/user/user.model";
import JwTPayload from "./jwt.payload";
export declare class JwtService {
    hello(): string;
    signIn(user: User): string;
    verifyToken(token: string): JwTPayload;
}
