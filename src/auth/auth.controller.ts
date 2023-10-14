import {
  Body,
  Controller, Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
 import { Public, GetCurrentUserId, GetCurrentUser } from '../common/decorators';
import { RtGuard } from '../common/guards';
import { AuthService } from './auth.service';
import { AuthDtoLogin, AuthDtoRegistration} from './dto';
import { Tokens ,User} from './types';

@Controller('auth-user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('registration')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDtoRegistration): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthDtoLogin): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: number): Promise<boolean> {
    return this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('token/refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
