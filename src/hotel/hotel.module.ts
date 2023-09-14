import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from 'src/hotel/hotel.entity';
import { Room } from 'src/hotel/room.entity';
import { RoomType } from 'src/hotel/roomType.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports:  [AuthModule, TypeOrmModule.forFeature([Hotel,Room,RoomType])],
  controllers: [HotelController],
  providers: [HotelService]
})
export class HotelModule {}
