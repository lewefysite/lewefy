import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RecaptchaGuard } from 'src/common/guards/recaptcha.guard';
import { HttpModule } from '@nestjs/axios';
import { EmailModule } from 'src/mail/email.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    PrismaModule,
    EmailModule,
    HttpModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET') || 'default_secret',
        signOptions: { expiresIn: '60m' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RecaptchaGuard],
})
export class AuthModule {}
```
