import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField, LongTextField, BoolField } from 'uniforms-semantic';
import MultiSelectField from '../forms/controllers/MultiSelectField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Recipes } from '../../api/recipe/Recipe';

const bridge = new SimpleSchema2Bridge(Recipes.schema);

/** Renders the Page for editing a single document. */
class EditRecipe extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { title, description, source, embed, ingredients, servings, instructions, tags, hasTried, _id } = data;
    Recipes.collection.update(_id, { $set: { title, description, source, embed, ingredients, servings, instructions, hasTried, tags } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Recipe</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <TextField name='title'/>
              <TextField name='description'/>
              <TextField name='source'/>
              <TextField name='embed'/>
              <LongTextField name='ingredients'/>
              <TextField name='servings'/>
              <LongTextField name='instructions'/>
              <MultiSelectField name='tags' showInlineError={true} placeholder={'Select tags (optional)'}/>
              <BoolField name='hasTried' />
              <SubmitField value='Submit'/>
              <ErrorsField/>
              <HiddenField name='owner' />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Recipe document in the props object. Uniforms adds 'model' to the props, which we use.
EditRecipe.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Recipe documents.
  const subscription = Meteor.subscribe(Recipes.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = Recipes.collection.findOne(documentId);
  return {
    doc,
    ready,
  };
})(EditRecipe);
