import {IsNumber, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddDto {
  @IsString()
  @ApiProperty()
  name: string;
}
