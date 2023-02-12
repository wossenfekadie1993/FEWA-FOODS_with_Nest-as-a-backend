import { Controller, Post ,Body, BadRequestException, Res, Get, Req, UnauthorizedException} from '@nestjs/common';
import { create } from 'domain';
import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Response ,Request } from 'express';
import { PassThrough } from 'stream';
import { request } from 'http';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService,
        private jwtService:JwtService){}
    @Post('register')
    async register(
        @Body('name')name:string,
        @Body('email')email:string,
        @Body('password')password:string,){
        const hashedPassword= await bcrypt.hash(password,12)
        const user= await this.userService.create(
            {name,
            email,
        password:hashedPassword})
        delete (await user).password
        const jwt = await this.jwtService.signAsync({email: user.email}, { secret: 'your-secret-key' });
        return {success: true, jwt: jwt} 



        

    }
    @Post('login')
    async login(
        @Body('email')email:string,
        @Body('password')password:string  ){
            console.log(email, password)
            const user=await this.userService.findOne({ where: { email } });
            if(!user){
                throw new BadRequestException('invalid credintial')
            }
            if(!await bcrypt.compare(password,user.password)){
                throw new BadRequestException('invalid credintial') 
            }
            console.log(user.email)
            const jwt = await this.jwtService.signAsync({email: user.email}, { secret: 'your-secret-key' });
            
            return{ success: true, jwt: jwt}
    }
    @Get('user')
    async user(@Res() res: Response,@Req() request:Request){
        try{
        const cookie=request.cookies['jwt'];
        const data =await this.jwtService.verifyAsync(cookie)
        if(!data){
            throw new UnauthorizedException()
        }
        const user = await this.userService.findOne({ where: { id: data['id'] } });
        const {password,...result}=user;
        res.cookie('jwt', cookie, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7, 
          });
        return user
    }catch(e){
        throw new UnauthorizedException()
    }
    }
    @Post('logout')
    async logout(@Res({passthrough:true}) response:Response ){
        response.clearCookie('jwt')
        return {message:'success'}

    }

    @Post("verifyuser")
    async verifyUser(@Body() token: {jwt: string}){
        
        const truth = await this.jwtService.verifyAsync(token.jwt, {secret: "your-secret-key"})
        if(!truth){
            return {success: false}
        }
        
        return {success: true}
        
    }


}
