import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { VenueDto } from './venue.dto';

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

  create(venue: VenueDto) {
    return this.prismaService.venue.create({
      data: venue,
    });
  }
}
