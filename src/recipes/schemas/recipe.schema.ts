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
  @Prop({
    type: Array<string>,
    default: [],
  })
  tags: string[];
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
  @Prop()
  steps?: string;
  @Prop({
    default: -1,
  })
  rating: number;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
