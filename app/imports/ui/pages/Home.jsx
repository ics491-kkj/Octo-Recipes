import React from 'react';
import { Container, Loader, Card, Segment } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stuffs } from '../../api/stuff/Stuff';

/** A simple static component to render some text for the landing page. */
class Home extends React.Component {
  // If the subscription has been received, then render the page. Otherwise, let them know it's loading
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const settings = {
      className: 'center',
      dots: true,
      centerMode: true,
      infinite: true,
      focusOnSelect: true,
      centerPadding: '60px',
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div id='background'>
        <Container className='home'>
          <div>
            <h2>You&apos;ve Tried</h2>
            <Slider {...settings}>
              <Segment basic>
                <Card>
                  <h3>1</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>2</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>3</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>4</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>5</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>6</h3>
                </Card>
              </Segment>
            </Slider>
          </div>
          <div className='row'>
            <h2>You Haven&apos;t Tried</h2>
            <Slider {...settings}>
              <Segment basic>
                <Card>
                  <h3>1</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>2</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>3</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>4</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>5</h3>
                </Card>
              </Segment>
              <Segment basic>
                <Card>
                  <h3>6</h3>
                </Card>
              </Segment>
            </Slider>
          </div>
        </Container>
      </div>
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
