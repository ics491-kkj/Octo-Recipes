import React from 'react';
import { Grid, Image, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import RecipeCard from '../components/RecipeCard';

/** A simple static component to render some text for the landing page. */
class Home extends React.Component {
  // If the subscription has been received, then render the page. Otherwise, let them know it's loading
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

        <Grid.Column width={4}>
          <Image size='small' circular src="/images/meteor-logo.png"/>
        </Grid.Column>

        <RecipeCard/>

        <Grid.Column width={8}>
          <h1>Welcome to this template</h1>
          <p>Now get to work and modify this app!</p>
        </Grid.Column>

      </Grid>
    );
  }
}

// Require an array of Status documents in the props.
Home.propTypes = {
  status: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const status = Stuffs.collection.find({}).fetch();
  return {
    status,
    ready,
  };
})(Home);
