import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/* Recipe Card:
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
        <Image src='/images/food-pic.png' wrapped ui={false}></Image>
        <Card.Content textAlign='left'>
          <Card.Header>Recipe name</Card.Header>
          <Card.Meta>Not tried before</Card.Meta>
          <Card.Description>This is what the recipe is about</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign='right'>
          <Button compact>
            <Icon fitted name='arrow alternate circle right'></Icon>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

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
