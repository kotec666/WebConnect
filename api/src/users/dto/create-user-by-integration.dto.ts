import {IsEmail, IsNotEmpty, Length} from "class-validator";

export class CreateUserByIntegrationDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  email: string
}