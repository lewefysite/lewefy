import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // IMPORTADO
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module'; // IMPORTADO

@Module({
  imports: [
    // Torna as variáveis de ambiente disponíveis globalmente
    ConfigModule.forRoot({ isGlobal: true }), 
    AuthModule, 
    UsersModule, 
    EmailModule // ADICIONADO
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}