import {User} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class UserEntity implements Partial<User> {
  @ApiProperty()
  id: number

  @ApiProperty()
  email: string

  @ApiProperty()
  name: string
}