import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter, Link } from 'react-router-dom';

/** User Card:
  A React-Semantic card that represents a user's information as a card view
  Contains:
    1. User's name
    2. The amount of recipes that they have
    3. Link to the user's page
*/
class UserCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content textAlign='left'>
          <Icon style={{ float: 'right' }} name='user' />
          <Card.Header>john@foo.com</Card.Header>
        </Card.Content>
        <Card.Content extra textAlign='left'>
          <Button style={{ float: 'right' }}compact as={NavLink} exact to='/list'>
            <Icon fitted name='arrow alternate circle right'></Icon>
          </Button>
          <Card.Meta>34 recipes</Card.Meta>
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
export default withRouter(UserCard);
