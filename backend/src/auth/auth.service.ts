import { Injectable, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../mail/email.service'; // <-- CORREÇÃO APLICADA AQUI
import { randomBytes } from 'crypto';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  // Seus métodos validateUser e login podem vir aqui...

  async register(registerDto: RegisterUserDto) {
    // Passo 1: Verificar se o e-mail é válido (se o seu emailService tiver essa lógica)
    // await this.emailService.verifyEmailAddress(registerDto.email);

    // Passo 2: Verificar se o usuário já existe no banco
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Este endereço de e-mail já está em uso.');
    }

    // Passo 3: Criar o usuário
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const confirmationToken = randomBytes(32).toString('hex');

    const user = await this.prisma.user.create({
      data: {
        email: registerDto.email,
        name: registerDto.name,
        password: hashedPassword,
        confirmationToken,
      },
    });

    // Passo 4: Enviar o e-mail de confirmação
    await this.emailService.sendConfirmationEmail(user.email, confirmationToken);

    return { message: 'Cadastro realizado com sucesso! Por favor, verifique seu e-mail para ativar sua conta.' };
  }

  async confirmEmail(token: string) {
    const user = await this.prisma.user.findUnique({
      where: { confirmationToken: token },
    });

    if (!user) {
      throw new BadRequestException('Token de confirmação inválido ou expirado.');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: new Date(),
        confirmationToken: null, // Limpa o token após o uso
      },
    });

    // Opcional: Logar o usuário automaticamente após a confirmação
    const payload = { username: user.email, sub: user.id };
    return {
      message: 'E-mail confirmado com sucesso!',
      access_token: this.jwtService.sign(payload),
    };
  }
}
