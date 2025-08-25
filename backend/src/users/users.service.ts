import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import * as bcrypt from 'bcrypt'; // Não é mais necessário aqui

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<any | undefined> {
    // Implementação real do Prisma que busca no banco de dados
    return this.prisma.user.findUnique({ where: { email } });
  }
}
