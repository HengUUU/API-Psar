import { SignUpPayLoad, PayLoad } from "./interface";
export declare class AuthService {
    private _jwtService;
    constructor();
    signIn(body: PayLoad): Promise<any>;
    getOTPsignUp(body: SignUpPayLoad): Promise<any>;
}
