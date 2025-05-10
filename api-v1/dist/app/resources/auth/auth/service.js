"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const jwt_service_1 = require("../jwt/jwt.service");
const user_model_1 = require("../../../models/user/user.model");
let AuthService = class AuthService {
    _jwtService;
    constructor() {
        this._jwtService = new jwt_service_1.JwtService();
    }
    async signIn(body) {
        try {
            const user = await user_model_1.default.findOne({
                where: { phoneNumber: body.phoneNumber },
                raw: true,
            });
            if (!user) {
                throw new common_1.UnauthorizedException("Phone number not found");
            }
            const isValidPassword = await bcrypt.compare(body.password, user.password);
            if (!isValidPassword) {
                throw new common_1.UnauthorizedException("Password is incorrect");
            }
            const token = this._jwtService.signIn(user);
            return { accessToken: token };
        }
        catch (error) {
            throw new common_1.UnauthorizedException("Error", error?.message);
        }
    }
    async getOTPsignUp(body) {
        if (body.password.length <= 8) {
            throw new common_1.BadRequestException('Password must be more than 8 characters');
        }
        try {
            const user = await user_model_1.default.findOne({
                where: { phoneNumber: body.phoneNumber }
            });
            if (user) {
                throw new common_1.BadRequestException('user already exist');
            }
            const newUser = await user_model_1.default.create({
                phoneNumber: body.phoneNumber,
                password: body.password,
                role: body.role
            });
            return { message: 'User created successfully' };
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException('cannot send OTP', error);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthService);
//# sourceMappingURL=service.js.map