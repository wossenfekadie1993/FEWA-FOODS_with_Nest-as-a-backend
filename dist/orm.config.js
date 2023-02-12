"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const Order_1 = require("./order/entity/Order");
const user_1 = require("./user/entity/user");
exports.config = {
    type: 'postgres',
    username: 'postgres',
    password: '1234',
    port: 5432,
    host: 'localhost',
    synchronize: true,
    entities: [user_1.User, Order_1.Order]
};
//# sourceMappingURL=orm.config.js.map