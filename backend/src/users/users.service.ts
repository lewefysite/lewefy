import { Injectable } from '@nestjs/common';
// Importe seu Prisma Client aqui
// import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // constructor(private prisma: PrismaService) {}

  // Exemplo - substitua pela implementação real do Prisma
  async findOne(email: string): Promise<any | undefined> {
    // return this.prisma.user.findUnique({ where: { email } });
    // Por enquanto, vamos mockar um usuário para teste:
    if (email === 'teste@lewefy.com') {
        return {
            id: '1',
            email: 'teste@lewefy.com',
            name: 'Usuário Teste',
            password: await bcrypt.hash('senha123', 10), // Senha mockada e criptografada
        };
    }
    return undefined;
  }
}