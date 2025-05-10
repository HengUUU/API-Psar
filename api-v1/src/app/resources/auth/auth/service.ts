import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Op } from "sequelize"; 
import * as bcrypt from "bcryptjs";


import { LoginRequestDto, SignUpDto } from "./login.dto";
import { JwtService } from "../jwt/jwt.service";
import { SignUpPayLoad, PayLoad } from "./interface";
import User from "src/app/models/user/user.model";
import { District } from "src/app/models/location/district.model";


@Injectable()
export class AuthService{

    private _jwtService: JwtService;
    
    constructor(
    ){
        this._jwtService = new JwtService();
    }
    
    async signIn(body : PayLoad): Promise<any> {
        try{
            const user = await User.findOne({
                where: { phoneNumber: body.phoneNumber},
                raw  : true,
            });
    
            if (!user) {
                throw new UnauthorizedException("Phone number not found");
            }

            const isValidPassword = await bcrypt.compare(body.password, user.password)


            if(!isValidPassword){
                throw new UnauthorizedException("Password is incorrect");
            }

            const token = this._jwtService.signIn(user);

            return {accessToken: token};
            // return 'Found'

        } catch (error){
            throw new UnauthorizedException("Error", error?.message)
        }
    }

    async getOTPsignUp(body : SignUpPayLoad): Promise<any> {

        if(body.password.length <= 8){
            throw new BadRequestException('Password must be more than 8 characters')
        }
        try { 
            const user = await User.findOne({
                where : { phoneNumber : body.phoneNumber}
            })
            if(user){
                throw new BadRequestException('user already exist')
            }

            // const otp = this.sendOtpToMobile(body.phoneNumber);

            // return otp;
            
            const newUser = await User.create({
                phoneNumber: body.phoneNumber,
                password: body.password,
                role    : body.role
            });            
            
            return {message: 'User created successfully'};
        } catch(error) {
            console.log(error)
            throw new UnauthorizedException('cannot send OTP', error);
        }
    }
}
