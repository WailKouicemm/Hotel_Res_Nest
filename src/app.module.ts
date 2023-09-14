import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { ReservationModule } from './reservation/reservation.module';
import { HotelModule } from './hotel/hotel.module';
import { DefaultAdminModule } from 'nestjs-admin';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule, AuthModule, ReservationModule, HotelModule , DefaultAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
