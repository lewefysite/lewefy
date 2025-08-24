import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
// ... outros imports
import { EmailModule } from 'src/email/email.module'; // IMPORTADO
import { PrismaModule } from 'src/prisma/prisma.module'; // Supondo que você tenha um PrismaModule
import { RecaptchaGuard } from 'src/common/guards/recaptcha.guard'; // IMPORTADO
@Module({
  imports: [
  HttpModule, // ADICIONADO
    // ... outros módulos
    PrismaModule, // Adicione se tiver
    EmailModule, // ADICIONADO
	// ... outros módulos
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    // ... outros providers
    RecaptchaGuard, // ADICIONADO
  ],
})
export class AuthModule {}
  
