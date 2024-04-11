import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {PrismaService} from "../prisma/prisma.service";
import {hash} from "../helpers/password";
import prismaExclude, {Entity, Keys} from "../helpers/prismaExclude";
import {User} from "@prisma/client";

@Injectable()
export class UsersService {
  public static exclude: (keyof User)[] = ["password"]

  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        ...data,
        password: await hash(data.password)
      },
      select: prismaExclude("User", UsersService.exclude)
    })
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }
}
