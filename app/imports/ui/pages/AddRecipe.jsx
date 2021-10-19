import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Recipes } from '../../api/recipe/Recipe';
import { RecipeFormSchema } from '../forms/RecipeForm';

const bridge = new SimpleSchema2Bridge(RecipeFormSchema);

/** Renders the Page for adding a document. */
class AddRecipe extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { title, description, source, ingredients, servings, directions, tags } = data;
    const owner = Meteor.user().username;
    Recipes.collection.insert({ title, description, source, ingredients, servings, directions, tags, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;

    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Recipe</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='title'/>
              <TextField name='description'/>
              <TextField name='source'/>
              <TextField name='ingredients'/>
              <TextField name='servings'/>
              <TextField name='directions'/>
              <TextField name='tags' placeholder='easy;pastry;dessert'/>

              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddRecipe;
