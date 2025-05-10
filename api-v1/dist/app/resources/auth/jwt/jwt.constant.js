"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwTConstant = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.JwTConstant = {
    secretKey: process.env.JWT_SECRET_KEY || 'secretKey',
    expiresIn: process.env.expiresIn || '1d'
};
//# sourceMappingURL=jwt.constant.js.map