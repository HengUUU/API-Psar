// import User
import * as jwt from "jsonwebtoken";
import User from "src/app/models/user/user.model";
import JwTPayload from "./jwt.payload";
import { JwTConstant } from "./jwt.constant";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtService{


    hello() {
        return 'hello wrld'
    }

    signIn(user : User){

        const jwtToken  = jwt.sign(
            {
                user : {
                    id : user.id ,
                    phoneNumber : user.phoneNumber,
                    role        : user.role
                }
            },
            JwTConstant.secretKey,
            { expiresIn : JwTConstant.expiresIn},
        );
        console.log(JwTConstant.secretKey)
        return jwtToken
    }

    verifyToken(token : string): JwTPayload {
        try{
            const decoded = jwt.verify(token, JwTConstant.secretKey)
            return decoded as JwTPayload;
        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw new Error('Token has expired');
            } else if (error instanceof jwt.JsonWebTokenError) {
                throw new Error('Malformed token');
            } else {
                throw new Error('Invalid token');
            }
        }
    }

}