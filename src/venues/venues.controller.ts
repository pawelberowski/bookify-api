import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto } from './create-venue.dto';
import { UpdateVenueDto } from './update-venue.dto';
import { JwtAuthenticationGuard } from '../authentication/jwt/jwt-authentication.guard';
import { GetVenuesDto } from './get-venues.dto';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  async getByFilter(@Query() query: GetVenuesDto) {
    return this.venuesService.getByFilter(query);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.venuesService.getById(id);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  create(@Body() venue: CreateVenueDto) {
    return this.venuesService.create(venue);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.venuesService.delete(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthenticationGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() venue: UpdateVenueDto) {
    return this.venuesService.update(id, venue);
  }
}
