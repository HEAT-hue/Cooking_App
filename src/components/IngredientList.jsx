// jshint esversion:6
import React from "react";

import Ingredient from "./Ingredient";


function IngredientList(props) {
  const ingredients = props.ingredientList;

  return (
    <>
      {ingredients.map((ingredient) => {
        return <Ingredient key={ingredient.id} {...ingredient} />
      })}   
    </>
  )
}


export default IngredientList;