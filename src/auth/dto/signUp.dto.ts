import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";



export class SignUpDto{

    @IsNotEmpty()
    username: string


    @IsStrongPassword()
    password: string

}