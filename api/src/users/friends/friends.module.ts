import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import { RequestsModule } from './requests/requests.module';

@Module({
  controllers: [FriendsController],
  providers: [FriendsService],
  imports: [RequestsModule]
})
export class FriendsModule {}
