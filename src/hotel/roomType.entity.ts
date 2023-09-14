import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Room } from "./room.entity";




@Entity()
export class RoomType{
    @PrimaryGeneratedColumn()
    id: number

    @Column({})
    type_name: string

    @Column()
    description: string


    @Column()
    price_per_night: number

    @OneToMany(()=>Room,(room)=>room.roomType)
    rooms: Room[]



    
}