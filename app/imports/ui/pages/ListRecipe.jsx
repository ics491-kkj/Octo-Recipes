import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipe/Recipe';
import RecipeItem from '../components/RecipeItem';

/** Renders a table containing all of the Recipe documents. Use <RecipeItem> to render each row. */
class ListRecipe extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">List Recipe</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Source</Table.HeaderCell>
              <Table.HeaderCell>Ingredients</Table.HeaderCell>
              <Table.HeaderCell>Servings</Table.HeaderCell>
              <Table.HeaderCell>Instructions</Table.HeaderCell>
              <Table.HeaderCell>Tags</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.recipes.map((recipe) => <RecipeItem key={recipe._id} recipe={recipe} />)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

// Require an array of Recipe documents in the props.
ListRecipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Recipe documents.
  const subscription = Meteor.subscribe(Recipes.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Recipe documents
  const recipes = Recipes.collection.find({}).fetch();
  return {
    recipes,
    ready,
  };
})(ListRecipe);
