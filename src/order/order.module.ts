import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './entity/Order';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { RequestMethod } from '@nestjs/common/enums';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([Order]),AuthModule, JwtModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthService).forRoutes({
      path: "order", method: RequestMethod.POST
    }, {
      path: "order/:id", method: RequestMethod.GET
    }, {
      path: "order/:id", method: RequestMethod.DELETE
    }, )
  }
}
