import SimpleSchema from 'simpl-schema';
import { RecipeDataValues as DataValues } from '../../api/recipe/Recipe';

const RecipeFormSchema = new SimpleSchema({
  title: { label: 'Title', type: String },
  description: { label: 'Description', type: String },
  source: { label: 'Source', type: String },
  embed: { label: 'Youtube link', type: String, optional: true },
  ingredients: { label: 'Ingredients', type: String },
  servings: { label: 'Servings', type: String },
  instructions: { label: 'Instructions', type: String },
  tags: { label: 'Tags', type: Array, optional: true },
  hasTried: { label: 'Has Tried', type: Boolean },
  'tags.$': { type: String, allowedValues: DataValues.atags },
});

export { RecipeFormSchema };