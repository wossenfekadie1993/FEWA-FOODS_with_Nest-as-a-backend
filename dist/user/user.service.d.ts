import { User } from './entity/user';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(data: any): Promise<User>;
    findOne(condition: any): Promise<User>;
}
