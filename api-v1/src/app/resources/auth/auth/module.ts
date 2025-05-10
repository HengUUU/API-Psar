import { Module } from "@nestjs/common"

//===================+> Custom library
import { AuthService } from './service';
import { AuthController } from "./controller";
import { JwtModule } from "@nestjs/jwt";
// import { UsersService } from "../temp/user.service";

@Module({
  imports     : [
    JwtModule.register({
      global: true, 
    })
  ],
  controllers : [AuthController],
  providers   : [AuthService],
})
export class AuthModule {}
