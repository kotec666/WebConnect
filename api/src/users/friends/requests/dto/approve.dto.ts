import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ApproveDto {
  @IsNumber()
  @ApiProperty()
  id: number;
}
