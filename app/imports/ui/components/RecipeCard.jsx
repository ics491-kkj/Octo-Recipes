import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Recipe Card:
  A React-Semantic card that represents recipe information as a card view
  Contains:
    1. The recipe's name
    2. Recipe's description
    3. Recipe's tag    (TODO)
      - could possible be in the meta content
    4. Link to the Recipe's page
*/
class RecipeCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.recipe.source} wrapped ui={false}></Image>
        <Card.Content textAlign='left'>
          <Card.Header>{this.props.recipe.title}</Card.Header>
          <Card.Meta>Not tried before</Card.Meta>
          <Card.Description>{this.props.recipe.description}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign='left'>
          {this.props.recipe.tags}
        </Card.Content>
        <Card.Content extra textAlign='left'>
          <Button compact>
            {(this.props.recipe.owner === Meteor.user().username) ?
              (<Card.Content extra>
                <Link to={`/edit/${this.props.recipe._id}`}>Edit</Link>
              </Card.Content>) : ''}
          </Button>
          <Button compact>
            {(this.props.recipe.owner === Meteor.user().username) ?
              (<Card.Content extra>
                <Link to={`/remove/${this.props.recipe._id}`}>Remove</Link>
              </Card.Content>) : ''}
          </Button>
          <Button compact>
             <Icon fitted name='arrow alternate circle right'></Icon>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string,
    ingredients: PropTypes.string,
    servings: PropTypes.string,
    instructions: PropTypes.string,
    tags: PropTypes.array,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(RecipeCard);
