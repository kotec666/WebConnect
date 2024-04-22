import {IsEmail, IsNotEmpty, IsOptional, Length, ValidateIf} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @Length(3, 144)
  name: string

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: string

  @ApiProperty()
  @IsOptional()
  @Length(8, 144)
  password: string
}