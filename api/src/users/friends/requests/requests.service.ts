import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddDto } from './dto/add.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { ERRORS } from '../../../validator/errors';
import {ApproveDto} from "./dto/approve.dto";
import {paginationByPage, PaginationQuery} from "../../../helpers/pagination";
import {UsersService} from "../../users.service";
import prismaExclude from "../../../helpers/prismaExclude";
import {PaginatedList} from "./queries/add.dto";

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  async add(id: number, addDto: AddDto) {
    if (
      await this.prisma.friendRequest.findFirst({
        where: {
          OR: [
            {
              senderId: id,
              recipientId: addDto.id,
            },
            {
              senderId: addDto.id,
              recipientId: id,
            },
          ],
        },
      })
    ) {
      throw new HttpException(ERRORS.ALREADY_CREATED, HttpStatus.BAD_REQUEST);
    }

    await this.prisma.friendRequest.create({
      data: {
        senderId: id,
        recipientId: addDto.id,
      },
    });

    return true;
  }

  async approve(id: number, approveDto: ApproveDto) {
    const request =  await this.prisma.friendRequest.findFirstOrThrow({
      where: {
        senderId: approveDto.id,
        recipientId: id,
      },
    })

    const friend = await this.prisma.friend.create({
      data: {
        ownerId: id,
        friendId: approveDto.id,
      }
    })
    await this.prisma.friend.create({
      data: {
        ownerId: approveDto.id,
        friendId: id,
      }
    })

    await this.prisma.friendRequest.delete({
      where: {
        recipientId_senderId: {
          recipientId: id,
          senderId: approveDto.id
        }
      }
    })

    return friend;
  }

  paginatedList(pagination: PaginatedList, id: number) {
    return this.prisma.friendRequest.findMany({
      ...paginationByPage(pagination.page, pagination.take),
      where: pagination.outgoing ? {
        senderId: id,
      } : {
        recipientId: id
      },
      include: {
        sender: {
          select: prismaExclude("User", UsersService.exclude)
        }
      }
    })
  }
}
