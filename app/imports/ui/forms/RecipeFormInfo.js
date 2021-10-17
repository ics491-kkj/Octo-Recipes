import SimpleSchema from 'simpl-schema';
import { RecipeDataValues as DataValues } from '../../api/recipe/Recipe';

const RecipeFormSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  description: { label: 'Description', type: String },
  ingredients: { label: 'Ingredients', type: String },
  instructions: { label: 'Instructions', type: String },
  image: { label: 'Image', type: String },
  tags: { label: 'Tags', type: Array, optional: true },
  'tags.$': { type: String, allowedValues: DataValues.atags },
});

export { RecipeFormSchema };