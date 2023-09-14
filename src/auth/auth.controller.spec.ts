import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';
import { JwtModule, JwtService } from '@nestjs/jwt'; // Import JwtService
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

describe('AuthController', () => {
  let controller: AuthController;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
    
      controllers: [AuthController],
      providers: [AuthService,  JwtService,       {
        provide: getRepositoryToken(User),
        useValue: Repository,
      },]
    }
    ).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
