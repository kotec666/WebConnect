import {Body, Controller, Delete, Get, Post, Req, Res, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
import {AuthEntity} from "./entity/auth.entity";
import {JwtAuthGuard} from "./jwt-auth.guard";
import { User } from "@prisma/client";
import {UserEntity} from "../users/entity/user.entity";
import {GoogleOAuthGuard} from "./google-ouath.guard";

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() { email, password }: LoginDto, @Res({ passthrough: true }) res) {
    const data =  await this.authService.login(email, password);

    res.cookie("accessToken", data.accessToken)

    return data
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  @ApiBearerAuth()
  @Get()
  auth(@Req() req) {
    return req.user
  }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: Boolean })
  @ApiBearerAuth()
  @Delete()
  async logout(@Req() req, @Res({passthrough: true}) res) {

    res.cookie("accessToken", undefined)

    return true
  }

  @Get("oauth/google")
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Req() req) {
    return req.user
  }

  @Get("oauth/google/redirect")
  @UseGuards(GoogleOAuthGuard)
  async googleRedirect(@Req() req, @Res({passthrough: true}) res) {
    const data =  await this.authService.createToken(req.user.email);

    res.cookie("accessToken", data.accessToken)

    return res.redirect("/")
  }
}
