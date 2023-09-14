import { Test, TestingModule } from '@nestjs/testing';
import { HotelController } from './hotel.controller';
import { AuthModule } from '../auth/auth.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
import { HotelService } from './hotel.service';
import { Repository } from 'typeorm';
import { User } from '../auth/user.entity';

describe('HotelController', () => {
  let controller: HotelController;
  


  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   imports:[AuthModule],
    //   controllers: [HotelController],
    //   providers:[
    //     HotelService,
    //     {
    //       provide: getRepositoryToken(User),
    //       useValue: Repository,
    //     },
    //     {
    //     provide: getRepositoryToken(Hotel),
    //     useValue: Repository,
    //   }]
    // }).compile();

   // controller = module.get<HotelController>(HotelController);
  });

  it('should be defined', () => {
   // expect(controller).toBeDefined();
  });
});
