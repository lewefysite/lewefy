import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EmailModule } from 'src/mail/email.module'; // Caminho corrigido
import { PrismaModule } from 'src/prisma/prisma.module';
import { RecaptchaGuard } from 'src/common/guards/recaptcha.guard';
import { HttpModule } from '@nestjs/axios'; // Import necessário para o Guard

@Module({
  imports: [
    HttpModule, // Adicionado para o RecaptchaGuard funcionar
    UsersModule,
    PassportModule,
    JwtModule.register({
      // Seus detalhes do JwtModule aqui
    }),
    PrismaModule,
    EmailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RecaptchaGuard],
})
export class AuthModule {}
