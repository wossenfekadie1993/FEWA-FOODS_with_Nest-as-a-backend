import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';


@Module({
  imports: [TypeOrmModule.forFeature([User]),JwtModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
