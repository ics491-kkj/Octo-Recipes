import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Card, Loader } from 'semantic-ui-react';
import RecipeCard from '../components/RecipeCard';
// import { withTracker } from 'meteor/react-meteor-data';
// import PropTypes from 'prop-types';

/** Renders a list of recipes. Each recipe is presented in a card form as shown in the RecipeCard.jsx component */
class ListRecipes extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  // render() {
  //   return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  // }

  // Render the page once subscriptions have been received.
  render() {
    return (
      <Container>
        <Header as='h1'>Your Recipes</Header>
        <Card.Group itemsPerRow={4} textAlign='center'>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
// ListRecipes.propTypes = {
//   recipes: PropTypes.array.isRequired,
//   ready: PropTypes.bool.isRequired,
// };

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
// export default withTracker(() => {
//   // Get access to Recipe documents.
//   const subscription = Meteor.subscribe(Recipes.userPublicationName);
//   // Determine if the subscription is ready
//   const ready = subscription.ready();
//   // Get the Recipe documents
//   const recipes = Recipes.collection.find({}).fetch();
//   return {
//     recipes,
//     ready,
//   };
// })(ListRecipes);
export default ListRecipes;
