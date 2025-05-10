//================> Core Library
import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";


//================> Custom Library
import { AuthService } from "./service";
import { LoginRequestDto, SignUpDto } from "./login.dto";

@Controller('/')
export class AuthController{
    
    constructor(
        private readonly _authService : AuthService
    ){}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() signinDto : LoginRequestDto){
        return this._authService.signIn(signinDto);
    }

    @Post('signup')
    @HttpCode(HttpStatus.OK)
    signup(@Body() signUpDto : SignUpDto){
        return this._authService.getOTPsignUp(signUpDto);
    }
    
}