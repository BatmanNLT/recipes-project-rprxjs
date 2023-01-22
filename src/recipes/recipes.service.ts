import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) {}

  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }
  createOne(createRecipeDto: CreateRecipeDto) {
    try {
      const createdRecipe = new this.recipeModel(createRecipeDto);
      return createdRecipe.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
