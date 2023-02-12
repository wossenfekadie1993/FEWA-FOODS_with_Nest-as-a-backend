import { IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator"



export class CreateOrderDto{
    
 @IsNotEmpty()
 @IsDefined()
 @IsString()
 name:string

 @IsNotEmpty()
 @IsDefined()
 @IsString()
 Phone:string

 @IsNotEmpty()
 @IsDefined()
 @IsString()
 food:string

@IsNotEmpty()
 @IsDefined()
 @IsNumber()
 itemsNo:number

 @IsNotEmpty()
 @IsDefined()
 @IsString()
 message:string
 
 @IsNotEmpty()
 @IsDefined()
 @IsString()
 Extra:string

 @IsNotEmpty()
 @IsDefined()
 @IsString()
 Address:string
}