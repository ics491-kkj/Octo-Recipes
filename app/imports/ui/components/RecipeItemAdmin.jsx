import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Recipe (Admin) table. See pages/ListRecipeAdmin.jsx. */
class RecipeItemAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.recipe.title}</Table.Cell>
        <Table.Cell>{this.props.recipe.description}</Table.Cell>
        <Table.Cell>{this.props.recipe.source}</Table.Cell>
        <Table.Cell>{this.props.recipe.ingredients}</Table.Cell>
        <Table.Cell>{this.props.recipe.servings}</Table.Cell>
        <Table.Cell>{this.props.recipe.instructions}</Table.Cell>
        <Table.Cell>{this.props.recipe.tags}</Table.Cell>
        <Table.Cell>{this.props.recipe.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
RecipeItemAdmin.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string,
    ingredients: PropTypes.string,
    servings: PropTypes.string,
    instructions: PropTypes.string,
    tags: PropTypes.array,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default RecipeItemAdmin;
