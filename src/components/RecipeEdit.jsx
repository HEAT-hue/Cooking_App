// jshint esversion:6
import React from "react";
import { v4 as uuidv4 } from "uuid"; // randon string for id

import IngredientEdit from "./IngredientEdit";
import { MyContext } from "./App.jsx";

function RecipeEdit(props) {
  const recipe = props.recipe;

  const { handleRecipeChange, handleSetRecipeId } = React.useContext(MyContext);

  function handleChange(change) {
    const newRecipe = { ...recipe, ...change };
    handleRecipeChange(newRecipe.id, newRecipe);
  }

  function handleIgredientChange(id, ingredient) {
    const newIngredientList = [...recipe.ingredients];
    const editIngredientIndex = newIngredientList.findIndex((i) => i.id === id);
    newIngredientList[editIngredientIndex] = ingredient;
    handleChange({ ingredients: newIngredientList });
  }
  
  function addIngredient() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ingredients: [...recipe.ingredients, newIngredient]});
  }
  
  function removeIngredient(id) {
    const newIngredientList = recipe.ingredients.filter((recipeIngredient) => recipeIngredient.id !== id);
    handleChange({ ingredients: newIngredientList });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-btn-container">
        <button
          className="btn recipe-edit__remove-btn"
          onClick={() => {
            handleSetRecipeId(undefined);
          }}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" name="name">
          Name
        </label>
        <input
          type="text"
          className="recipe-edit__input"
          onChange={(e) => handleChange({ name: e.target.value })}
          value={recipe.name}
        />
        <label className="recipe-edit__label" name="name">
          Cook Time
        </label>
        <input
          type="text"
          className="recipe-edit__input"
          onChange={(e) => handleChange({ cookingTime: e.target.value })}
          value={recipe.cookingTime}
        />
        <label className="recipe-edit__label" name="name">
          Servings
        </label>
        <input
          type="text"
          className="recipe-edit__input"
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value || "0") })
          }
          value={recipe.servings}
        />
        <label className="recipe-edit__label" name="name">
          Instructions
        </label>
        <textarea
          className="recipe-edit__input"
          onChange={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
        ></textarea>
      </div>

      <div className="recipe-edit__ingredients-container">
        <label className="recipe-edit__label">Ingredients</label>
        <div className="recipe-edit__ingredients-grid">
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          {recipe.ingredients.map((recipeIngredient) => {
            return (
              <IngredientEdit
                key={recipeIngredient.id}
                ingredient={recipeIngredient}
                removeIngredient={removeIngredient}
                handleIngredientChange={handleIgredientChange}
              />
            );
          })}
        </div>
      </div>
      <div className="recipe-edit__add-ingredients-btn-container">
        <button 
          className="btn btn-pry"
          onClick={addIngredient} 
        >
          Add ingredient
        </button>
      </div>
    </div>
  );
}

export default RecipeEdit;