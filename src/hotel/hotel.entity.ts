import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Room } from "./room.entity";




@Entity()
export class Hotel{
    @PrimaryGeneratedColumn()
    id: number

    @Column({})
    name: string

    @Column()
    address: string

    @Column()
    phone_number: string


    @OneToMany(()=>Room , (room)=>room.hotel,{cascade:true})
    rooms: Room[]


    constructor(partial: Partial<Hotel>) {
      Object.assign(this, partial);
    }


    toString(): string {
        return `${this.name}`;
      }
}