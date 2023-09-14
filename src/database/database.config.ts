import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../auth/user.entity";
import { Hotel } from "../hotel/hotel.entity";
import { Room } from "../hotel/room.entity";
import { Reservation } from "../reservation.entity";
import { RoomType } from "../hotel/roomType.entity";
import { Invoice } from "./entities/invoice.entity";
import AdminUser from "nestjs-admin/dist/src/adminUser/adminUser.entity";




const config : TypeOrmModuleOptions = {
    type : "mysql",
    host : "localhost",
    port : 3306,
    password : "28131320Wx.",
    username : "root",
    database :  "nestdb",
    entities : [AdminUser,User,Hotel,Room,Reservation,RoomType,Invoice],
    synchronize : true,
    autoLoadEntities : true
}



export default config