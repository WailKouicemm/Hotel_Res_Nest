import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Room } from "./hotel/room.entity";
import { User } from "./auth/user.entity";
import { Invoice } from "./database/entities/invoice.entity";




@Entity()
export class Reservation{
    @PrimaryGeneratedColumn()
    id: number

    @Column({})
    check_in_date: Date

    @Column()
    check_out_date: Date


    @Column()
    totale_price: number


    @ManyToOne(()=>User,(user)=>user.reservations)
    user: User


    @ManyToOne(()=>Room,(room)=>room.reservations)
    room: Room

    @OneToOne(()=>Invoice,(invoice)=>invoice.reservation)
    invoice: Invoice



    
}