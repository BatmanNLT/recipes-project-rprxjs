import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  findAll() {
    return this.recipesService.findAll();
  }

  @Post()
  createOne(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.createOne(createRecipeDto);
  }
}
