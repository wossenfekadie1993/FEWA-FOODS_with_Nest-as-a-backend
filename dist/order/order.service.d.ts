import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entity/Order';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrderById(id: number): Promise<Order>;
    deleteById(id: number): Promise<{
        success: boolean;
    }>;
    findOne(condition: any): Promise<Order>;
}
