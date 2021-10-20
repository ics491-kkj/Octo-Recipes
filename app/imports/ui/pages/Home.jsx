import React from 'react';
import { Container, Loader, Grid } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import RecipeCard from '../components/RecipeCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Recipes } from '../../api/recipe/Recipe';

/** A simple static component to render some text for the home page. */
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
    const recipesTried = this.props.recipes.filter((recipe) => (recipe.hasTried));
    const recipesNotTried = this.props.recipes.filter((recipe) => (!recipe.hasTried));
    console.log(recipesTried, recipesNotTried);
    return (
      <Grid id='landing-page' className='background'>
        <Container className='home'>
          <div>
            <h2>You&apos;ve Tried</h2>
            <Slider {...settings}>
              {recipesTried.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />)}
            </Slider>
          </div>
          <div className='row'>
            <h2>You Haven&apos;t Tried</h2>
            <Slider {...settings}>
              {recipesNotTried.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />)}
            </Slider>
          </div>
        </Container>
      </Grid>
    );
  }
}

// Require an array of Status documents in the props.
// may need to add status
Home.propTypes = {
  recipes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Recipe documents.
  const subscription = Meteor.subscribe(Recipes.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Recipe documents'
  // may need to add status
  const recipes = Recipes.collection.find({}).fetch();
  return {
    recipes,
    ready,
  };
})(Home);
