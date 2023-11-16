import { PrismaService } from '../database/prisma.service';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user';
import { Prisma } from '@prisma/client';
import { PrismaError } from '../../prisma/prisma-error.enum';

export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async getById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async create(user: UserDto) {
    try {
      return this.prismaService.user.create({
        data: user,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error?.code === PrismaError.UniqueConstraintFailed
      ) {
        throw new ConflictException('User with that email alredy exists');
      }
      throw error;
    }
  }
}