import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';
import Recipe from '../../api/recipe/Recipe';

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
        <Image src='/images/food-pic.png' wrapped ui={false}></Image>
        <Card.Content textAlign='left'>
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Meta>{triedBefore}</Card.Meta>
          <Card.Description>{this.state.description}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign='right'>
          <Button compact as={NavLink} exact to='/recipe' props={this.state}>
            <Icon fitted name='arrow alternate circle right'></Icon>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

/** Add link to edit info page if user is owner to recipe, has an issue

         {(this.props.contact.owner === Meteor.user().username) ?
            (<Card.Content extra>
            <Link to={`/edit/${this.props.Recipe._id}`}>Edit</Link>
          </Card.Content>) : ''}

*/

// Keeping this for the time where we connect the front-end to the back-end
// Require a document to be passed to this component.
// StuffItem.propTypes = {
//   stuff: PropTypes.shape({
//     name: PropTypes.string,
//     quantity: PropTypes.number,
//     condition: PropTypes.string,
//     _id: PropTypes.string,
//   }).isRequired,
// };

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(RecipeCard);
