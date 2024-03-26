import { ApiProperty } from "@nestjs/swagger";
import { Logger } from "@nestjs/common";

export const paginationByPage = (pageStr: string, takeStr: string = "20") => {
  let page = parseInt(pageStr) - 1;
  const take = Math.min(parseInt(takeStr), 100) || 20;

  Logger.log(take * page, take);
  return {
    skip: take * page,
    take,
  };
};

export class PaginationQuery {
  @ApiProperty({
    format: "int32",
    title: "Page",
    description: "Номер страницы",
    default: 1,
  })
  page: string;

  @ApiProperty({
    format: "int32",
    title: "Take",
    description: "сколько элементов взять из бд максимум 100",
    default: 20,
  })
  take?: string;
}

export default {
  paginationByPage,
};
