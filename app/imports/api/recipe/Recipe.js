import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The RecipesCollection. It encapsulates state and variable values for recipe.
 */

const RecipeDataValues = { atags: ['Easy', 'Medium', 'Difficult', 'Healthy', 'Vegetarian', 'Vegan', 'Ketogenic', 'Gluten Free'] };

class RecipesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'RecipesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      title: String,
      description: String,
      source: String,
      ingredients: String,
      servings: String,
      instructions: String,
      tags: { type: Array, optional: true },
      'tags.$': { type: String, allowedValues: RecipeDataValues.atags },
      // temporary hasTried property to simplify demo
      hasTried: Boolean,
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the RecipesCollection.
 * @type {RecipesCollection}
 */
const Recipes = new RecipesCollection();
export { Recipes, RecipeDataValues };
