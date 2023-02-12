import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<{
        success: boolean;
        jwt: string;
    }>;
    login(email: string, password: string): Promise<{
        success: boolean;
        jwt: string;
    }>;
    user(res: Response, request: Request): Promise<import("./entity/user").User>;
    logout(response: Response): Promise<{
        message: string;
    }>;
    verifyUser(token: {
        jwt: string;
    }): Promise<{
        success: boolean;
    }>;
}
