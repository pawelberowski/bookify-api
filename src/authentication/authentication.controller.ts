import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LogInDto } from './dto/log-in.dto';
import { Response } from 'express';
import { RequestWithUser } from './request-with-user';
import { JwtAuthenticationGuard } from './jwt/jwt-authentication.guard';
import { AuthenticationResponseDto } from './dto/authentication-response.dto';
import { TransformPlainToInstance } from 'class-transformer';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(JwtAuthenticationGuard)
  @Get()
  @TransformPlainToInstance(AuthenticationResponseDto)
  authenticate(@Req() request: RequestWithUser) {
    return request.user;
  }

  @Post('sign-up')
  @TransformPlainToInstance(AuthenticationResponseDto)
  async signUp(@Body() signUpData: SignUpDto) {
    return this.authenticationService.signUp(signUpData);
  }

  @HttpCode(200)
  @Post('log-in')
  @TransformPlainToInstance(AuthenticationResponseDto)
  async logIn(
    @Body() logInData: LogInDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user =
      await this.authenticationService.getAuthenticatedUser(logInData);
    const cookie = this.authenticationService.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    return user;
  }

  @HttpCode(200)
  @Post('log-out')
  async logOut(@Res({ passthrough: true }) response: Response) {
    const cookie = this.authenticationService.getCookieForLogOut();
    response.setHeader('Set-Cookie', cookie);
  }
}
