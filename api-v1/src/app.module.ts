import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/resources/auth/auth/module';
import { JwtService } from './app/resources/auth/jwt/jwt.service';
import { RouterModule } from '@nestjs/core';
import { appRoutes } from './app.route';;
import { ConfigModule } from './config/config.module';
import { ExploreModule } from './app/resources/r2-user/u1-explore/explore.module';
import { UserModule } from './app/resources/r2-user/module';



@Module({
  imports: [
    ConfigModule,
    AuthModule,
    UserModule,
    RouterModule.register(appRoutes),
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
