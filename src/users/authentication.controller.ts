import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up';
import { LogInDto } from './dto/log-in';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('sign-up')
  async signUp(@Body() signUpData: SignUpDto) {
    return this.authenticationService.signUp(signUpData);
  }

  @HttpCode(200)
  @Post('log-in')
  async logIn(@Body() logInData: LogInDto) {
    return this.authenticationService.getAuthenticatedUser(logInData);
  }
}
