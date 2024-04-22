import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddDto } from './dto/add.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { ERRORS } from '../../../validator/errors';

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
}
