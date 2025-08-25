import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { RecaptchaGuard } from '../common/guards/recaptcha.guard'; // Ajustei para caminho relativo

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ... outros endpoints que você possa ter (ex: login)

  @Get('confirm-email')
  async confirmEmail(@Query('token') token: string) {
    return this.authService.confirmEmail(token);
  }

  @Post('register')
  @UseGuards(RecaptchaGuard)
  async register(@Body() registerDto: RegisterUserDto) {
    return this.authService.register(registerDto);
  }
}
