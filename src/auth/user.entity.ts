import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Reservation } from "../reservation.entity";




@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({})
    username: string

    @Column()
    password: string


    @OneToMany(()=>Reservation,(Reservation)=>Reservation.user)
    reservations: Reservation[]

    toString(): string {
        return `${this.username}`;
      }
    
}