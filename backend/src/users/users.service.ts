import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  // Você pode adicionar mais métodos aqui, como:
  // async findById(id: string) { ... }
  // async create(data: CreateUserDto) { ... }
  // async update(id: string, data: UpdateUserDto) { ... }
  // async delete(id: string) { ... }
}
