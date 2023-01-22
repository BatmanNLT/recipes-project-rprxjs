import { IsNotEmpty, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  ingredients: string;

  @IsOptional()
  tags?: string[];

  @IsUrl()
  imageUrl: string;

  @IsOptional()
  @IsNumber()
  cookingTime?: number;

  @IsOptional()
  @IsNumber()
  prepTime?: number;

  @IsNotEmpty()
  @IsNumber()
  yield: number;

  @IsNotEmpty()
  steps: string;
}
