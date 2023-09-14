import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt.guard';

@Module({
  imports : [JwtModule.register({
    secret: "env-secret",
    signOptions: {expiresIn:"1y"}
  }) ,
  TypeOrmModule.forFeature([User])],
  exports: [JwtModule,AuthService,JwtAuthGuard],
  controllers: [AuthController],
  providers: [AuthService,JwtAuthGuard]
})
export class AuthModule {
 

}



 