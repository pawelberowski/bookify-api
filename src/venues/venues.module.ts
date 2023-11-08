import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VenuesController],
  providers: [VenuesService],
})
export class VenuesModule {}
