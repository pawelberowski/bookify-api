import { NotFoundException } from '@nestjs/common';

export class VenueNotFoundException extends NotFoundException {
  constructor(venueId: number) {
    super(`Venue with id ${venueId} not found`);
  }
}
