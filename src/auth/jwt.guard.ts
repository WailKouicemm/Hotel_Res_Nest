import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService , 
    private readonly authService : AuthService
    ) {}

  async canActivate(context: ExecutionContext):  Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Unauthorized access');
    }

    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.authService.findOneByUsername(decoded.username);

      if (!user) {
        throw new UnauthorizedException('Unauthorized access');
      }

      const userDto = new UserDto({
        id : user.id,
        username: user.username
      })
      request.user = userDto;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Unauthorized access');
    }
  }
}