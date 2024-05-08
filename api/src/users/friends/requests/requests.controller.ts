import {Body, Controller, Patch, Post, Req, UseGuards} from '@nestjs/common';
import { RequestsService } from './requests.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../../../auth/jwt-auth.guard";
import {AddDto} from "./dto/add.dto";
import {ApproveDto} from "./dto/approve.dto";

@Controller('requests')
@ApiTags("friends/requests")
@UseGuards(JwtAuthGuard)
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  @ApiOperation({
    summary: "Отправка заявки в друзья"
  })
  add(@Body() addDto: AddDto, @Req() req) {
    return this.requestsService.add(req.user.id, addDto)
  }

  @Patch()
  @ApiOperation({
    summary: "Принять заявку в друзья"
  })
  approve(@Body() addDto: ApproveDto, @Req() req) {
    return this.requestsService.approve(req.user.id, addDto)
  }
}
