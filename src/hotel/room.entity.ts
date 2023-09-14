import { type } from "os";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { RoomType } from "./roomType.entity";
import { Hotel } from "./hotel.entity";
import { Reservation } from "../reservation.entity";




@Entity()
export class Room{
    @PrimaryGeneratedColumn()
    id: number

    @Column({})
    room_number: string

    @Column()
    status: string




    @ManyToOne(() => Hotel, (hotel) => hotel.rooms,{onDelete:"CASCADE"} )
    hotel: Hotel

    @ManyToOne(()=>RoomType, (roomType) => roomType.rooms)
    roomType: RoomType


    @OneToMany(()=>Reservation,(reservation)=>reservation.room)
    reservations: Reservation[]
    
}