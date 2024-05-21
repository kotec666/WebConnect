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
    const recipient = await this.prisma.user.findFirstOrThrow({
      where: {
        name: addDto.name
      }
    })

    if (
      await this.prisma.friendRequest.findFirst({
        where: {
          OR: [
            {
              senderId: id,
              recipientId: recipient.id,
            },
            {
              senderId: recipient.id,
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
        recipientId: recipient.id,
      },
    });

    return true;
  }

  async approve(id: number, approveDto: ApproveDto) {
    const recipient = await this.prisma.user.findFirstOrThrow({
      where: {
        name: approveDto.name
      }
    })

    const request =  await this.prisma.friendRequest.findFirstOrThrow({
      where: {
        senderId: recipient.id,
        recipientId: id,
      },
    })

    const friend = await this.prisma.friend.create({
      data: {
        ownerId: id,
        friendId: recipient.id,
      }
    })
    await this.prisma.friend.create({
      data: {
        ownerId: recipient.id,
        friendId: id,
      }
    })

    await this.prisma.friendRequest.delete({
      where: {
        recipientId_senderId: {
          recipientId: id,
          senderId: recipient.id
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
