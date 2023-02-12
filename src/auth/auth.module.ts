import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[JwtModule, JwtModule.register({secret: "your-secret-key", signOptions: {expiresIn: "1d"}})] ,
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
