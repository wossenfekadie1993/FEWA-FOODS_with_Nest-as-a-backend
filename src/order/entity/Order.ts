import {Entity, PrimaryGeneratedColumn,Column} from "typeorm"

@Entity({name:"Order"})
export class Order{
 @PrimaryGeneratedColumn()
 id:number
 @Column()
 name:string
 @Column({unique:true})
 Phone:string
 @Column()
 food:string
 @Column()
 itemsNo:number
 @Column()
 message:string
 @Column()
 Extra:string
 @Column()
Address: string

}