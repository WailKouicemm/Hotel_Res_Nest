import { Body, Controller, HttpException, HttpStatus, Post,Get, UseGuards,Request ,UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/signUp.dto';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt.guard';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {

    constructor(
        readonly autServece: AuthService,
        readonly jwtService: JwtService 
    ){}


    @Post("signup")
    async SignUp(@Body() signUpDto:SignUpDto){
        const {username,password} = signUpDto;
        const user = await this.autServece.findOneByUsername(username)

        if (user) {            
            throw new HttpException("User already exists",HttpStatus.CONFLICT)
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const createdUser = await this.autServece.createUser({
            ...signUpDto,
            password : hashedPassword
        })

        const accessToken = this.jwtService.sign({sub:[{id:createdUser.id,username:createdUser.username}]})
        const refreshToken = this.jwtService.sign({ sub:[{id:createdUser.id,username:createdUser.username}]}, { expiresIn: '30d' });

        return {accessToken : accessToken ,refreshToken:refreshToken }
    }


    @Post("login")
    async LogIn(@Body() loginDto:SignUpDto){
        const {username,password} = loginDto;
        const user = await this.autServece.findOneByUsername(username)

        if (!user) {            
            throw new HttpException("Invalid Username Or Password",HttpStatus.NOT_FOUND)
        }

        const valid = await bcrypt.compare(password,user.password)

        

        if (!valid) {
          throw new HttpException("Invalid Username Or Password",HttpStatus.NOT_FOUND) 
        }

        const accessToken = this.jwtService.sign({sub:[{id:user.id , username:user.username}]})
        const refreshToken = this.jwtService.sign({ sub: [{id:user.id , username:user.username}] }, { expiresIn: '30d' });
        return {accessToken : accessToken ,refreshToken:refreshToken }


        

        
    }

    @Get("allusers")
    @UseGuards(JwtAuthGuard)
    async allUsers(){
        return await this.autServece.findAll()   
    }


  @Post('refresh-token')
  async refreshAccessToken(@Body() { refreshToken }: { refreshToken: string }) {
    try {
      const decoded =await this.jwtService.verify(refreshToken);
      const user = await this.autServece.findOneByUsername(decoded.sub.username);
      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }
      const accessToken = this.jwtService.sign({ sub: [user.id,user.username] });
      return { access_token: accessToken };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async me(@Request() request):Promise<User>{
    return request.user
  }

    

}
