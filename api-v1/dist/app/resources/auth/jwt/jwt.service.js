"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jwt = require("jsonwebtoken");
const jwt_constant_1 = require("./jwt.constant");
const common_1 = require("@nestjs/common");
let JwtService = class JwtService {
    hello() {
        return 'hello wrld';
    }
    signIn(user) {
        const jwtToken = jwt.sign({
            user: {
                id: user.id,
                phoneNumber: user.phoneNumber,
                role: user.role
            }
        }, jwt_constant_1.JwTConstant.secretKey, { expiresIn: jwt_constant_1.JwTConstant.expiresIn });
        console.log(jwt_constant_1.JwTConstant.secretKey);
        return jwtToken;
    }
    verifyToken(token) {
        try {
            const decoded = jwt.verify(token, jwt_constant_1.JwTConstant.secretKey);
            return decoded;
        }
        catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw new Error('Token has expired');
            }
            else if (error instanceof jwt.JsonWebTokenError) {
                throw new Error('Malformed token');
            }
            else {
                throw new Error('Invalid token');
            }
        }
    }
};
exports.JwtService = JwtService;
exports.JwtService = JwtService = __decorate([
    (0, common_1.Injectable)()
], JwtService);
//# sourceMappingURL=jwt.service.js.map