import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    if (Meteor.userId() != null) {
      return <Redirect to='/home'/>;
    }
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={4}>
          <Image size='small' circular src="/images/meteor-logo.png"/>
        </Grid.Column>

        <Grid.Column width={8}>
          <h1>Welcome to this template</h1>
          <p>Now get to work and modify this app!</p>
        </Grid.Column>

      </Grid>
    );
  }
}

export default Landing;
