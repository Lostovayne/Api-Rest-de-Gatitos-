import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(2)
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
