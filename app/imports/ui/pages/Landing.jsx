import React from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    if (Meteor.userId() != null) {
      return <Redirect to='/home'/>;
    }
    return (
      <div className='background'>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={8}>
            <Segment>
              <Header as='h3'>Welcome to OctoRecipes.</Header>
              <p>log in or register to get started.</p>
              <Button>Register</Button>
              <Button color='green'>Sign in</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Landing;
