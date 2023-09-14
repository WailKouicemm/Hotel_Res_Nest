import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Room } from "../../hotel/room.entity";
import { User } from "../../auth/user.entity";
import { Reservation } from "../../reservation.entity";




@Entity()
export class Invoice{
    @PrimaryGeneratedColumn()
    id: number

    @Column({})
    check_in_date: Date

    @Column()
    check_out_date: Date


    @Column()
    totale_price: number


    @OneToOne(()=>Reservation,(reservation)=>reservation.invoice)
    reservation: Reservation

    
}