// jshint esversion:6
import React from "react";

function IngredientEdit(props) {
  
  const {
    ingredient,  // Ingredient Object
    removeIngredient
  } = props

  function handleChange(change) {
    const newIngredient = {...ingredient, ...change};  
    props.handleIngredientChange(newIngredient.id, newIngredient)
  }

  return (
    <>
      <input 
        type="text" 
        className="recipe-edit__input"
        onChange={(e) => handleChange({name: e.target.value})}
        value={ingredient.name} />
      <input 
        type="text" 
        className="recipe-edit__input"
        onChange={(e) => handleChange({amount: e.target.value})}
        value={ingredient.amount} />
      <button 
        className="btn btn-danger"
        onClick={() => {
          removeIngredient(ingredient.id)
        }} 
      >
        &times;
      </button>
    </>
  )
}

export default IngredientEdit;