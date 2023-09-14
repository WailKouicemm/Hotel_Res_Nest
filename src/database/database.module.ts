import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  config  from '../database/database.config';
import { User } from '../auth/user.entity';

@Module({
    imports : [
        TypeOrmModule.forRoot(config),
    ],
    exports : [TypeOrmModule],
})
export class DatabaseModule {}
