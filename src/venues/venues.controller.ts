import { Controller, Get } from '@nestjs/common';
import { VenuesService } from './venues.service';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  getAll() {
    return this.venuesService.getAll();
  }
}
