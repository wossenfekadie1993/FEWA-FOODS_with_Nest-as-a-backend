import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthService implements NestMiddleware {
    constructor(private jwtService: JwtService){}
    async use(req: Request, res: Response, next: NextFunction){
        try{
            const authorization = req.headers.authorization
            const token = authorization.split(" ")[1]
            
            if(!token){
                return {success: false}
            }
            
            
            const data = await this.jwtService.verifyAsync(token, {secret: "your-secret-key"})
            
            if(!data){
                return {success: false}
            }
            console.log("passing")
            next()
        }catch(err){
            
            return res.status(403).json({success: false})
        }
        
    }
}
