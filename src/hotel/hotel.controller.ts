import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from 'src/hotel/hotel.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { HotelDto } from './dto/hotel.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('hotels')
export class HotelController {
    constructor(
         private readonly hotelService: HotelService,
    ){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllHotels(): Promise<Hotel[]> {
        return await this.hotelService.findAll()
      }

      @Get(':id')
      @UseGuards(JwtAuthGuard)
      async getHotelDetails(@Param('id') id: number): Promise<Hotel> {
          return await this.hotelService.findById(id)
        }
    

        @Post()
        @UseGuards(JwtAuthGuard)
        async addHotel(@Body() hotel: HotelDto): Promise<Hotel> {
            return await this.hotelService.addHotel(hotel)
          }    
        
          @Delete(':id')
          @UseGuards(JwtAuthGuard)
          async deleteHotel(@Param() id: number): Promise<void> {
               await this.hotelService.deleteHotel(id)
            }    
  

      
      
}
