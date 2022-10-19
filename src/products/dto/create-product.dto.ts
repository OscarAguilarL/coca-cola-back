import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsUrl()
  image_url: string;
}
