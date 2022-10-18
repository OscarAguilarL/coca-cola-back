import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateContactFormDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  details: string;
}
