import {
    IsInt,
    IsOptional,
    IsPositive,
    IsString,
    MinLength
} from 'class-validator';
import { Breed } from 'src/breeds/entities/breed.entity';

export class CreateCatDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  @IsOptional()
  breed?: Breed;
}
