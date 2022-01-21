// jshint esversion:6
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // randon string for id

import "../css/App.css";  // Style sheet
import recipeProps from "../RecipesDB.js"; // data from DB
import RecipeList from "./RecipeList"; // Recipe list Component containing all recipe components
import RecipeEdit from "./RecipeEdit.jsx"; // Recipe Edit component

// For storage persistance
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

// Context to pass props between components
export const MyContext = React.createContext();

function App() {

  const [selectRecipeId, setSelectRecipeId] = useState(); // Get the id to edit a recipe 
  const [recipes, setRecipes] = useState(recipeProps);

  const selectedRecipe = recipes.find(recipe => recipe.id ===  selectRecipeId);
  
  // Different context values to be used in provider function
  const contextValue = {
    handleRecipeDelete,
    handleSetRecipeId,
    handleRecipeChange
  }

  // Get initial data from local storage
  useEffect(() => {
    const recipeJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (recipeJSON) {
      setRecipes(recipeJSON);
    }
  }, []);

  // Save changes made to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  // Add a new item
  function handleRecipesAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "Name",
      cookingTime: "",
      servings: "0",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };
    setRecipes((previousValue) => {
      console.log("A state change was recorded");
      return [...previousValue, newRecipe];
    });
    handleSetRecipeId(newRecipe.id);
  }

  // Delete a recipe
  function handleRecipeDelete(id) {
    const newRecipeList = recipes.filter(recipe => recipe.id !== id );
    // Remove any existing recipe in edit
    setSelectRecipeId(undefined);
    // Render new recipe list
    setRecipes(newRecipeList);
  }

  // Set the selectedRecipe id to edit
  function handleSetRecipeId(id) {
    setSelectRecipeId(id);
  }

  // Find and edit existing recipe with new one
  function handleRecipeChange(id, recipe) {
    const newRecipeList = [...recipes];
    const editRecipeIndex = newRecipeList.findIndex(r => r.id === id);
    newRecipeList[editRecipeIndex] = recipe;
    setRecipes(newRecipeList);
  }

  return (
    <>
      <MyContext.Provider value={contextValue}>
        <RecipeList recipes={recipes} handleRecipeAdd={handleRecipesAdd} />
        {selectRecipeId && <RecipeEdit recipe={selectedRecipe} />}
      </MyContext.Provider>
    </>
  );
}

export default App;