import {Body, Controller, Get, Patch, Post, Query, Req, UseGuards} from '@nestjs/common';
import { RequestsService } from './requests.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../../../auth/jwt-auth.guard";
import {AddDto} from "./dto/add.dto";
import {ApproveDto} from "./dto/approve.dto";
import pagination, {PaginationQuery} from "../../../helpers/pagination";
import {PaginatedList} from "./queries/add.dto";

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

  @Get()
  @ApiOperation({
    summary: "Список пришедших заявок"
  })
  paginatedList(@Query() pagination: PaginatedList, @Req() req) {
    return this.requestsService.paginatedList(pagination, req.user.id)
  }
}
