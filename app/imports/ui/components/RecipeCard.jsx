import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

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
  constructor(props) {
    super(props);

    // Temporary state variables until we pass props down to recipe cards
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

  render() {
    let triedBefore;
    if (this.state.triedBefore) {
      triedBefore = 'Has been tried before';
    } else {
      triedBefore = 'Hasn\'t been tried before';
    }
    return (
      <Card>
        <Image src={this.props.recipe.source} wrapped ui={false}></Image>
        <Card.Content textAlign='left'>
          <Card.Header>{this.props.recipe.title}</Card.Header>
          <Card.Meta>{triedBefore}</Card.Meta>
          <Card.Description>{this.props.recipe.description}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign='left'>
          {this.props.recipe.tags}
        </Card.Content>
        <Card.Content extra textAlign='right'>
          <Button.Group>
            <Button icon as={NavLink} exact to={`/remove/${this.props.recipe._id}`}>
              <Icon name='delete' color='red'/>
            </Button>
            <Button icon as={NavLink} exact to={`/recipe/${this.props.recipe._id}`}>
              <Icon name='arrow alternate circle right' />
            </Button>
          </Button.Group>
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
