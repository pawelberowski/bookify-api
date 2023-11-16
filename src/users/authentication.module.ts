import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from './users.module';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationController, AuthenticationService],
})
export class AuthenticationModule {}
