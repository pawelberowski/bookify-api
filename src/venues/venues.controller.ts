import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto } from './create-venue.dto';
import { UpdateVenueDto } from './update-venue.dto';
import { JwtAuthenticationGuard } from '../authentication/jwt/jwt-authentication.guard';
import { RequestWithUser } from '../authentication/request-with-user';

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
  @UseGuards(JwtAuthenticationGuard)
  create(@Body() venue: CreateVenueDto, @Req() request: RequestWithUser) {
    console.log(`Venue posted by ${request.user.name}`);
    return this.venuesService.create(venue);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.venuesService.delete(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthenticationGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() venue: UpdateVenueDto,
    @Req() request: RequestWithUser,
  ) {
    console.log(`Venue edited by ${request.user.name}`);
    return this.venuesService.update(id, venue);
  }
}
