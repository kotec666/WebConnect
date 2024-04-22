import {Controller, Post} from '@nestjs/common';
import {FriendsService} from "./friends.service";
import {ApiOperation} from "@nestjs/swagger";

@Controller('friends')
export class FriendsController {
  constructor(private friendsService: FriendsService) {
  }

}
