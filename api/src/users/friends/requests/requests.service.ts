import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddDto } from './dto/add.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { ERRORS } from '../../../validator/errors';
import {ApproveDto} from "./dto/approve.dto";

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
    console.log(id, approveDto)
    const request =  await this.prisma.friendRequest.findFirstOrThrow({
      where: {
        senderId: approveDto.id,
        recipientId: id,
      },
    })

    return request;
  }
}
