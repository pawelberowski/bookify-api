import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class VenuesService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.venue.findMany();
  }

  async getById(id: number) {
    const venue = await this.prismaService.venue.findUnique({
      where: {
        id,
      },
    });
    if (!venue) {
      throw new NotFoundException();
    }
    return venue;
  }
}
