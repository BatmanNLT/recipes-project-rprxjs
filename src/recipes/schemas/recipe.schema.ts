import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema({
  id: true,
})
export class Recipe {
  @Prop({
    required: true,
  })
  title: string;
  @Prop({
    required: true,
  })
  ingredients: string;
  @Prop()
  tags?: string;
  @Prop({
    required: true,
  })
  imageUrl: string;
  @Prop()
  cookingTime?: number;
  @Prop()
  prepTime?: number;
  @Prop({
    required: true,
  })
  yield: number;
  @Prop({
    required: true,
  })
  steps: string;
  @Prop({
    required: true,
    default: -1,
  })
  rating: number;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
