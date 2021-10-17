import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../api/recipe/Recipe.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Recipes.collection.insert(data);
}

// Initialize the RecipesCollection if empty.
if (Recipes.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
