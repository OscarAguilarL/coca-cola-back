import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateContactFormDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  details: string;
}
