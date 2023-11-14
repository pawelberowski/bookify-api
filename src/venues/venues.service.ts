import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';
import { PrismaError } from '../../prisma/prisma-error.enum';
import { VenueNotFoundException } from './venue-not-found.exception';
import { UpdateVenueDto } from './update-venue.dto';
import { CreateVenueDto } from './create-venue.dto';

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
      throw new VenueNotFoundException(id);
    }
    return venue;
  }

  create(venue: CreateVenueDto) {
    return this.prismaService.venue.create({
      data: venue,
    });
  }

  async delete(id: number) {
    try {
      return await this.prismaService.venue.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new VenueNotFoundException(id);
      }
      throw error;
    }
  }

  async update(id: number, venue: UpdateVenueDto) {
    try {
      return await this.prismaService.venue.update({
        data: {
          ...venue,
          id: undefined,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new VenueNotFoundException(id);
      }
      throw error;
    }
  }
}
