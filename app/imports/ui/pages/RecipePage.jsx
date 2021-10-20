import React from 'react';
import { Grid, Segment, Header, Button, Image, Menu } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

/** A simple static component that that displays a recipe's contents. */
class RecipePage extends React.Component {
  render() {
    const segmentStyle = {
      marginTop: '20px',
      marginBottom: '20px',
      padding: '20px 20px',
    };

    return (
      <div>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={10}>
            <Segment style={segmentStyle}>
              <Menu secondary>
                <Menu.Item>
                  <Header as='h3'>Title</Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Button color='red'>Delete</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <Image src='/images/food-pic.png' floated='right'></Image>
              <Header as='h3'>Description</Header>
              <Header as='h3'>Source</Header>
            </Segment>
            <Header as='h2'>Ingredients</Header>
            <Segment style={segmentStyle}>
              <Header as='h4'>
                ingredients
                - go
                - here
              </Header>
            </Segment>
            <Header as='h2'>Directions</Header>
            <Segment style={segmentStyle}>
              <Header as='h4'>
                1. directions
                2. go
                3. here
              </Header>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default RecipePage;
