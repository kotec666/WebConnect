import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddDto {
  @IsNumber()
  @ApiProperty()
  id: number;
}