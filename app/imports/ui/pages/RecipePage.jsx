import React from 'react';
import { Grid, Segment, Header, Button, Image, Menu, Icon, Loader, Label, Container } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Recipes } from '../../api/recipe/Recipe';

/** A simple static component that that displays a recipe's contents. */
class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    // Temporary state variables until we are able to get the recipe data from the recipe's _id
    this.state = {
      name: 'Spamusubi',
      triedBefore: false,
      description: 'A nice little snack with spam and rice',
      tags: ['easy'],
      source: 'my mom',
      ingredients: '1. rice\n' +
          '2. spam',
      instructions: '1. do this\n2. then that',
      owner: '123',
    };
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const segmentStyle = {
      marginTop: '20px',
      marginBottom: '20px',
      padding: '20px 20px',
    };

    const containerStyle = {
      marginTop: '10px',
      marginBottom: '6px',
      padding: '10px, 10px',
    };

    console.log(this.props.recipe);
    return (
      <div>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Row columns='equal'>
            <Grid.Column>
              <Segment style={segmentStyle}>
                <Menu secondary>
                  <Menu.Item>
                    <Header as='h2'>{this.props.recipe.title}</Header>
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <Button.Group>
                        <Button icon>
                          <Icon name='add' color='green'/>
                        </Button>
                        <Button icon as={NavLink} exact to={`/edit/${this.props.recipe._id}`}>
                          <Icon name='edit'/>
                        </Button>
                        <Button icon as={NavLink} exact to={`/remove/${this.props.recipe._id}`}>
                          <Icon name='delete' color='red'/>
                        </Button>
                      </Button.Group>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
                <Image src={this.props.recipe.source} floated='right'></Image>
                <p>{this.props.recipe.description}</p>
                <Container style={containerStyle}>
                  {this.props.recipe.tags.map((tag) => <Label key={tag._id}>{tag}</Label>)}
                </Container>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>Ingredients</Header>
              <Segment style={segmentStyle}>
                <Header as='h4'>
                  {this.props.recipe.ingredients}
                </Header>
              </Segment>
              <Header as='h2'>Instructions</Header>
              <Segment style={segmentStyle}>
                <Header as='h4'>
                  {this.props.recipe.instructions}
                </Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// Require a document to be passed to this component.
// RecipePage.propTypes = {
//   recipe: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     source: PropTypes.string,
//     ingredients: PropTypes.string,
//     servings: PropTypes.string,
//     instructions: PropTypes.string,
//     tags: PropTypes.array,
//     _id: PropTypes.string,
//   }).isRequired,
// };

// Require the presence of a Recipe document in the props object. Uniforms adds 'model' to the props, which we use.
RecipePage.propTypes = {
  recipe: PropTypes.object,
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
  const recipe = Recipes.collection.findOne(documentId);
  return {
    recipe,
    ready,
  };
})(RecipePage);
