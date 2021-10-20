import React from 'react';
import { Grid, Segment, Header, Button, Image, Menu, Icon } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

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

  render() {
    const segmentStyle = {
      marginTop: '20px',
      marginBottom: '20px',
      padding: '20px 20px',
    };

    return (
      <div>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Row columns='equal'>
            <Grid.Column>
              <Segment style={segmentStyle}>
                <Menu secondary>
                  <Menu.Item>
                    <Header as='h3'>{this.state.name}</Header>
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <Button.Group>
                        <Button icon>
                          <Icon name='add' color='green'/>
                        </Button>
                        <Button icon>
                          <Icon name='edit'/>
                        </Button>
                        <Button icon>
                          <Icon name='delete' color='red'/>
                        </Button>
                      </Button.Group>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
                <Image src='/images/food-pic.png' floated='right'></Image>
                <p>{this.state.description}</p>
                <p>Source: {this.state.source}</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>Ingredients</Header>
              <Segment style={segmentStyle}>
                <Header as='h4'>
                  {this.state.ingredients}
                </Header>
              </Segment>
              <Header as='h2'>Instructions</Header>
              <Segment style={segmentStyle}>
                <Header as='h4'>
                  {this.state.instructions}
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

export default RecipePage;
