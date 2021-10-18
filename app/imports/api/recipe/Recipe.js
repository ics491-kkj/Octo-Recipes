import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The RecipeCollection. It encapsulates state and variable values for stuff.
 */
class RecipeCollection {
  constructor() {
    // The name of this collection.
    this.name = 'RecipeCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      title: String,
      description: String,
      source: String,
      ingredients: String,
      servings: String,
      directions: String,
      tags: String,      // each tag in string is a keyword/keywords seperated by special character
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
 * The singleton instance of the RecipeCollection.
 * @type {RecipeCollection}
 */
export const Stuffs = new RecipeCollection();
