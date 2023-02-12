import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { prototype } from "events"
import { Order } from "./order/entity/Order"

import { User } from "./user/entity/user"
export const config:TypeOrmModuleOptions={
    type:'postgres',
    username:'postgres',
    password:'1234', 
    port:5432,
    host:'localhost',
    synchronize:true,
    entities:[User,Order]


}