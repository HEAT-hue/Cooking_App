// jshint esversion:6

const recipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookingTime: "1:45",
    servings: "3",
    instructions: "1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds"
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs"
      }
    ]
  },
  {
    id: 2,
    name: "Plain Pork",
    cookingTime: "3:45",
    servings: "3",
    instructions: "1. Put paparinka on pork \n2. Put pork in oven \n3. Eat pork",
    ingredients: [
      {
        id: 3,
        name: "Pork",
        amount: "3 pounds"
      },
      {
        id: 4,
        name: "Paprika",
        amount: "2 Tbs"
      }
    ]
  }
]

export default recipes;