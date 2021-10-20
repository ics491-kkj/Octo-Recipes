import React from 'react';
import { Card, Image, Button, Icon, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

/** Has Tried Button:
  A react semantic ui button that updates the recipe as tried in the database
*/
class HasTriedButton extends React.Component {
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
    return (
      <Button color='blue'>Tried</Button>
    );
  }
}

HasTriedButton.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string,
    ingredients: PropTypes.string,
    servings: PropTypes.string,
    instructions: PropTypes.string,
    tags: PropTypes.array,
    hasTried: PropTypes.bool,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(HasTriedButton);
