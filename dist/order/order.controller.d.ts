import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entity/Order';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrderById(Phone: string): Promise<any>;
    deleteOrder(Phone: string): Promise<{
        success: boolean;
    }>;
}
