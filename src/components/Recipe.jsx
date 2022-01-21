// jshint esversion:6
import React from "react";

import IngredientList from "./IngredientList";
import {MyContext} from "./App.jsx"

function Recipe(props) {
  const {
    id,
    name, 
    cookingTime, 
    servings, 
    instructions,
    ingredients
  } = props;

  const {handleSetRecipeId, handleRecipeDelete} = React.useContext(MyContext)
  
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button 
            className="btn btn-pry mr-1"
            onClick={() => {
              handleSetRecipeId(id);
            }}
          >
          Edit
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => {
                handleRecipeDelete(id)
            }} 
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Cooking Time:</span>
        <span className="recipe_value"> {cookingTime}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Servings:</span>
        <span className="recipe_value"> {servings}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Instructions:</span>
        <div className="recipe_value recipe_instructions recipe_value--indented"> {instructions}</div>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Ingredients:</span>
        <div className="recipe_value recipe_value--indented recipe__ingredients">
          <IngredientList ingredientList={ingredients} />
        </div>
      </div>
    </div>
  )
}

export default Recipe;