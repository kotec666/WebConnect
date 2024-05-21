import {IsNumber, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ApproveDto {
  @IsString()
  @ApiProperty()
  name: string;
}
