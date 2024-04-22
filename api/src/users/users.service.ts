import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {PrismaService} from "../prisma/prisma.service";
import {hash} from "../helpers/password";
import prismaExclude, {Entity, Keys} from "../helpers/prismaExclude";
import {User} from "@prisma/client";
import {CreateUserByIntegrationDto} from "./dto/create-user-by-integration.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

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

  async createByIntegration(data: CreateUserByIntegrationDto) {
    return this.prisma.user.create({
      data: {
        ...data,
      },
      select: prismaExclude("User", UsersService.exclude)
    })
  }

  async findOne(id: number) {
    return this.prisma.user.findFirstOrThrow({
      where: {
        id
      },
      select: prismaExclude("User", UsersService.exclude)
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id
      },
      data: {
        ...updateUserDto,
        password: updateUserDto.password ? await hash(updateUserDto.password) : undefined
      },
      select: prismaExclude("User", UsersService.exclude)
    })
  }

  async findOneByEmailOrNull(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email
      },
      select: prismaExclude("User", UsersService.exclude)
    })
  }
}
