import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entity/Order';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private readonly orderRepository:Repository <Order>) {
            
        }
        async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
            return this.orderRepository.save(createOrderDto)
            }
    
        async getOrderById(id: number): Promise<Order> {
        
            const found=this.orderRepository.findOne({where: {id}})
            if (!found) {
                throw new NotFoundException("Order with id '${id}' not found")
            }
            return found
            
        }
        async deleteById(id: number) {
            
            await this.orderRepository.delete(id)
            return {success: true}
            
        }
        async findOne(condition:any):Promise<Order>{

            return this.orderRepository.findOne(condition)
        }
}
