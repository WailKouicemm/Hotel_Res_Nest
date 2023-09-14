import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/signUp.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async findAll():Promise<User[]>{
        return await this.userRepository.find({})
    }

    async findOneByUsername(username : string):Promise<User>{
        const user = await this.userRepository.findOne({where:{username : username}})
        return user
    }


    async createUser(signUpDto:SignUpDto):Promise<User>{
        const user = this.userRepository.create(signUpDto)
        return await this.userRepository.save(user)
    }



}
