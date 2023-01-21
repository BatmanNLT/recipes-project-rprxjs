import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/recipes-app-rxjs'),
    RecipesModule,
  ],
})
export class AppModule {}
