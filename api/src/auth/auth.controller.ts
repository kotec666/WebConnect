import {Body, Controller, Post, Res} from '@nestjs/common';
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
import {AuthEntity} from "./entity/auth.entity";

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() { email, password }: LoginDto, @Res({ passthrough: true }) res) {
    const token =  await this.authService.login(email, password);

    res.cookie("accessToken", token.accessToken)

    return {
      accessToken: token.accessToken
    };
  }
}
