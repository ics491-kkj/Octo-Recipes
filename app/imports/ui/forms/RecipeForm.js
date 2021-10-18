import SimpleSchema from 'simpl-schema';

const RecipeFormSchema = new SimpleSchema({
  title: { label: 'Title', type: String },
  description: { label: 'Description', type: String },
  source: { label: 'Source', type: String, optional: true },
  ingredients: { label: 'Ingredients', type: String },
  servings: { label: 'Servings', type: String },
  directions: { label: 'Directions', type: String },
  tags: { label: 'Tags', type: String, optional: true },
});

export {VaccineFormInfoSchema};