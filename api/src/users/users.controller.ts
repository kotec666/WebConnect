import {Body, Controller, Patch, Post, Req, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UserEntity} from "./entity/user.entity";
import {UpdateUserDto} from "./dto/update-user.dto";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOkResponse({ type: UserEntity })
  create(@Body() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Patch()
  @ApiOperation({
    summary: `Обновление текущего пользователя`,
  })
  @ApiOkResponse({ type: UserEntity })
  @UseGuards(JwtAuthGuard)
  update(@Body() data: UpdateUserDto, @Req() req) {
    return this.usersService.update(req.user.id, data);
  }
}
