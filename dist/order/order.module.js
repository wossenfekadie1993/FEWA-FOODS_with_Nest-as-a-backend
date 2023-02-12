"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const Order_1 = require("./entity/Order");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const enums_1 = require("@nestjs/common/enums");
const auth_module_1 = require("../auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
let OrderModule = class OrderModule {
    configure(consumer) {
        consumer.apply(auth_service_1.AuthService).forRoutes({
            path: "order", method: enums_1.RequestMethod.POST
        }, {
            path: "order/:id", method: enums_1.RequestMethod.GET
        }, {
            path: "order/:id", method: enums_1.RequestMethod.DELETE
        });
    }
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Order_1.Order]), auth_module_1.AuthModule, jwt_1.JwtModule],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map