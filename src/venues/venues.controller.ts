import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { VenuesService } from './venues.service';

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
}
