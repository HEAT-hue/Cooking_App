// jshint esversion:6
import React from "react";

import Recipe from "./Recipe.jsx";

function RecipeList(props) {
  return (
    <div className="recipe-list">
      <div>
        {props.recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn-pry recipe_add-btn"
          onClick={props.handleRecipeAdd}
        >
          Add recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
