import { AuthService } from "./service";
import { LoginRequestDto, SignUpDto } from "./login.dto";
export declare class AuthController {
    private readonly _authService;
    constructor(_authService: AuthService);
    signIn(signinDto: LoginRequestDto): Promise<any>;
    signup(signUpDto: SignUpDto): Promise<any>;
}
