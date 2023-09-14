import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
//import { Invoice } from 'src/database/entities/invoice.entity';
//import { Reservation } from 'src/database/entities/reservation.entity';
import { Room } from './room.entity';
import { RoomType } from './roomType.entity';
//import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { HotelDto } from './dto/hotel.dto';

@Injectable()
export class HotelService {
    constructor(
        // @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Hotel) private readonly hotelRepository: Repository<Hotel>,
        // @InjectRepository(Reservation) private readonly reservationRepository: Repository<Reservation>,
        // @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
        // @InjectRepository(RoomType) private readonly roomTypeRepository: Repository<RoomType>,
        // @InjectRepository(Invoice) private readonly invoiceRepository: Repository<Invoice>,
    ){}

    async findAll():Promise<Hotel[]>{
          return  await this.hotelRepository.find({}) 
    }


    async findById(id:number):Promise<Hotel>{
        const details = await this.hotelRepository
      .createQueryBuilder('hotel')
      .leftJoinAndMapMany(
        'hotel.rooms',
        Room,
        'room',
        'room.hotelId = hotel.id',
      )
      .leftJoinAndMapOne(
        'room.roomType',
        RoomType,
        'room_type',
        'room.roomTypeId = room_type.id',
      )
      .where('hotel.id = :id', { id })
      .getOne();

      if(!details){
        throw new NotFoundException("Hotel not found")
      }


    

      return details

  }


  async addHotel(hotel:HotelDto){
    const hotel_inst = new Hotel(hotel)
    return await this.hotelRepository.save(hotel_inst)
    
  }


  async deleteHotel(id:number){
    
    const result = await this.hotelRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Hotel with ID ${id} not found`);
    }

    
  }
}
