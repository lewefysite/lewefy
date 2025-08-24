import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { RecaptchaGuard } from 'src/common/guards/recaptcha.guard'; // Guard importado

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ... seu endpoint de login existente ...

  @Post('register')
  async register(@Body() registerDto: RegisterUserDto) {
    return this.authService.register(registerDto);
  }

  @Get('confirm-email')
  async confirmEmail(@Query('token') token: string) {
    return this.authService.confirmEmail(token);

  @UseGuards(RecaptchaGuard) // <-- A MÁGICA ACONTECE AQUI!
  async register(@Body() registerDto: RegisterUserDto) {
    return this.authService.register(registerDto);
  }

  // ...
}