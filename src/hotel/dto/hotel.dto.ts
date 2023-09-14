import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class HotelDto{


    id: number

    @IsNotEmpty()
    @IsString()
    name: string
    @IsString()
    @IsNotEmpty()
    address: string
    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber("AL",{})
    phone_number: string

    constructor(partial: Partial<HotelDto>) {
        Object.assign(this, partial);
      }
}