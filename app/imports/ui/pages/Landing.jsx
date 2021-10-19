import React from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    if (Meteor.userId() != null) {
      return <Redirect to='/home'/>;
    }

    const segmentStyle = {
      marginTop: '30px',
      marginBottom: '50px',
      padding: '30px 30px',
    };

    return (
      <div>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={8}>
            <Segment style={segmentStyle}>
              <Header as='h3'>Welcome to OctoRecipes.</Header>
              <p>log in or register to get started.</p>
              <Button as={NavLink} exact to='/signup'>Register</Button>
              <Button as={NavLink} exact to='/signin' color='green'>Sign in</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Landing;
