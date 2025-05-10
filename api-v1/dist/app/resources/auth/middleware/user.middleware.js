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
var UserMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../jwt/jwt.service");
let UserMiddleware = UserMiddleware_1 = class UserMiddleware {
    jwtService;
    logger = new common_1.Logger(UserMiddleware_1.name);
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    use(req, res, next) {
        this.logger.log(UserMiddleware_1.name);
        const headers = req.headers;
        const token = headers?.authorization?.split(' ')[1];
        if (!token) {
            throw new common_1.UnauthorizedException('No Token in request');
        }
        let decoded;
        try {
            decoded = this.jwtService.verifyToken(token);
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
        if (decoded.user.role === 'user') {
            next();
        }
        else {
            throw new common_1.UnauthorizedException('Access Denied. You are not allow to perform the action');
        }
    }
};
exports.UserMiddleware = UserMiddleware;
exports.UserMiddleware = UserMiddleware = UserMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_service_1.JwtService])
], UserMiddleware);
//# sourceMappingURL=user.middleware.js.map