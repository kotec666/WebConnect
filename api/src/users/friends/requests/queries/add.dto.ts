import {IsBoolean, IsNumber, isString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {PaginationQuery} from "../../../../helpers/pagination";
import {Transform} from "class-transformer";

export class PaginatedList extends PaginationQuery {
  @Transform(({ value }) => {
    if (isString(value)) return value === "true";
    return value;
  })
  @ApiProperty()
  outgoing: boolean;
}
