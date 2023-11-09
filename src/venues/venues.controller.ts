import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { VenueDto } from './venue.dto';

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
  create(@Body() venue: VenueDto) {
    return this.venuesService.create(venue);
  }
}
