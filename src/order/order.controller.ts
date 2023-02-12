import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entity/Order';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService:OrderService) {}
    @Post()
    @UsePipes(ValidationPipe)
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        console.log("dto")
        return this.orderService.createOrder(createOrderDto)
    }
    @Get('/:phone')
    async getOrderById(@Param('phone') Phone:string) : Promise<any> {
        const order = await this.orderService.findOne({where: {Phone}})
        return {success: true, order: order}
        
    }
    @Delete('/:phoneNumber')
    async deleteOrder(@Param('Phone') Phone:string)  {
        console.log(Phone)
        const order=await this.orderService.findOne({ where: { Phone } });
        return await this.orderService.deleteById(order.id)
        
    }
}
