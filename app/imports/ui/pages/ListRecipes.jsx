import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Card, Input, Icon, Menu } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Recipes } from '../../api/recipe/Recipe';
import RecipeCard from '../components/RecipeCard';

/** Renders a list of recipes. Each recipe is presented in a card form as shown in the RecipeCard.jsx component */
class ListRecipes extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  // render() {
  //   return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  // }

  // Render the page once subscriptions have been received.

  state = {
    searchTerm: '',
    recipes: [],
  };

  componentDidMount() {
    this.setState({
      recipes: this.props.recipes,
    });
  }

  onSearchHandler = e => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    const toSearch = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase())
        || item.tags.join().toLowerCase().includes(searchTerm.toLowerCase());
    const recipes = this.props.recipes
      .filter(toSearch(this.state.searchTerm))
      .map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} className='list-card'/>);

    return (
      <Container id='list-page'>
        <Menu secondary>
          <Menu.Item>
            <Header as='h1'>Your Recipes</Header>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                icon={<Icon name='search' inverted circular link />}
                placeholder='Search...'
                type='text'
                value={this.state.searchTerm}
                onChange={this.onSearchHandler.bind(this)}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Card.Group itemsPerRow={4} textAlign='center' style={{ width: '90em' }}>
          {recipes}
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListRecipes.propTypes = {
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
})(ListRecipes);
// export default ListRecipes;
