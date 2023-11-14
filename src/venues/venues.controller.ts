import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto } from './create-venue.dto';
import { UpdateVenueDto } from './update-venue.dto';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  getAll() {
    return this.venuesService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.venuesService.getById(id);
  }

  @Post()
  create(@Body() venue: CreateVenueDto) {
    return this.venuesService.create(venue);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.venuesService.delete(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() venue: UpdateVenueDto) {
    return this.venuesService.update(id, venue);
  }
}
