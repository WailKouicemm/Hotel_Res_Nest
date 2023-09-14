import { Test, TestingModule } from '@nestjs/testing';
import { HotelService } from './hotel.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { HotelModule } from './hotel.module';
import { Hotel } from './hotel.entity';
import { DatabaseModule } from 'src/database/database.module';
import { Repository } from 'typeorm';

describe('HotelService', () => {
  let service: HotelService;

  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelService,{
        provide: getRepositoryToken(Hotel),
        useValue: Repository,
      }],
    }).compile();

    service = module.get<HotelService>(HotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
