import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Recipe table. See pages/ListRecipe.jsx. */
class RecipeItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.recipe.name}</Table.Cell>
        <Table.Cell>{this.props.recipe.description}</Table.Cell>
        <Table.Cell>{this.props.recipe.ingredients}</Table.Cell>
        <Table.Cell>{this.props.recipe.instructions}</Table.Cell>
        <Table.Cell>{this.props.recipe.image}</Table.Cell>
        <Table.Cell>{this.props.recipe.tags}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.recipe._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.string,
    instructions: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.array,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(RecipeItem);
