import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import MultiSelectField from '../forms/controllers/MultiSelectField';
import { RecipeFormSchema as formSchema } from '../forms/RecipeFormInfo';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Recipes } from '../../api/recipe/Recipe';

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddRecipe extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { title, description, source, ingredients, servings, instructions, tags } = data;
    const owner = Meteor.user().username;
    Recipes.collection.insert({ title, description, source, ingredients, servings, instructions, tags, owner },
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
              <LongTextField name='ingredients'/>
              <TextField name='servings'/>
              <LongTextField name='instructions'/>
              <MultiSelectField name='tags' showInlineError={true} placeholder={'Select tags (optional)'}/>
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
