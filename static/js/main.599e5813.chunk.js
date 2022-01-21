(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),a=t(8),r=t.n(a),s=t(3),d=t(7),l=t(17),j=(t(14),[{id:1,name:"Plain Chicken",cookingTime:"1:45",servings:"3",instructions:"1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken",ingredients:[{id:1,name:"Chicken",amount:"2 Pounds"},{id:2,name:"Salt",amount:"1 Tbs"}]},{id:2,name:"Plain Pork",cookingTime:"3:45",servings:"3",instructions:"1. Put paparinka on pork \n2. Put pork in oven \n3. Eat pork",ingredients:[{id:3,name:"Pork",amount:"3 pounds"},{id:4,name:"Paprika",amount:"2 Tbs"}]}]),o=t(2),u=t(0);var b=function(e){var n=e.name,t=e.amount;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:n}),Object(u.jsx)("span",{children:t})]})};var p=function(e){var n=e.ingredientList;return Object(u.jsx)(u.Fragment,{children:n.map((function(e){return Object(u.jsx)(b,Object(o.a)({},e),e.id)}))})};var m=function(e){var n=e.id,t=e.name,i=e.cookingTime,a=e.servings,r=e.instructions,s=e.ingredients,d=c.a.useContext(x),l=d.handleSetRecipeId,j=d.handleRecipeDelete;return Object(u.jsxs)("div",{className:"recipe",children:[Object(u.jsxs)("div",{className:"recipe__header",children:[Object(u.jsx)("h3",{className:"recipe__title",children:t}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-pry mr-1",onClick:function(){l(n)},children:"Edit"}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){j(n)},children:"Delete"})]})]}),Object(u.jsxs)("div",{className:"recipe_row",children:[Object(u.jsx)("span",{className:"recipe_label",children:"Cooking Time:"}),Object(u.jsxs)("span",{className:"recipe_value",children:[" ",i]})]}),Object(u.jsxs)("div",{className:"recipe_row",children:[Object(u.jsx)("span",{className:"recipe_label",children:"Servings:"}),Object(u.jsxs)("span",{className:"recipe_value",children:[" ",a]})]}),Object(u.jsxs)("div",{className:"recipe_row",children:[Object(u.jsx)("span",{className:"recipe_label",children:"Instructions:"}),Object(u.jsxs)("div",{className:"recipe_value recipe_instructions recipe_value--indented",children:[" ",r]})]}),Object(u.jsxs)("div",{className:"recipe_row",children:[Object(u.jsx)("span",{className:"recipe_label",children:"Ingredients:"}),Object(u.jsx)("div",{className:"recipe_value recipe_value--indented recipe__ingredients",children:Object(u.jsx)(p,{ingredientList:s})})]})]})};var O=function(e){return Object(u.jsxs)("div",{className:"recipe-list",children:[Object(u.jsx)("div",{children:e.recipes.map((function(e){return Object(u.jsx)(m,Object(o.a)({},e),e.id)}))}),Object(u.jsx)("div",{className:"recipe-list__add-recipe-btn-container",children:Object(u.jsx)("button",{className:"btn btn-pry recipe_add-btn",onClick:e.handleRecipeAdd,children:"Add recipe"})})]})};var h=function(e){var n=e.ingredient,t=e.removeIngredient;function i(t){var i=Object(o.a)(Object(o.a)({},n),t);e.handleIngredientChange(i.id,i)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"text",className:"recipe-edit__input",onChange:function(e){return i({name:e.target.value})},value:n.name}),Object(u.jsx)("input",{type:"text",className:"recipe-edit__input",onChange:function(e){return i({amount:e.target.value})},value:n.amount}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){t(n.id)},children:"\xd7"})]})};var v=function(e){var n=e.recipe,t=c.a.useContext(x),i=t.handleRecipeChange,a=t.handleSetRecipeId;function r(e){var t=Object(o.a)(Object(o.a)({},n),e);i(t.id,t)}function d(e,t){var i=Object(s.a)(n.ingredients),c=i.findIndex((function(n){return n.id===e}));i[c]=t,r({ingredients:i})}function j(e){r({ingredients:n.ingredients.filter((function(n){return n.id!==e}))})}return Object(u.jsxs)("div",{className:"recipe-edit",children:[Object(u.jsx)("div",{className:"recipe-edit__remove-btn-container",children:Object(u.jsx)("button",{className:"btn recipe-edit__remove-btn",onClick:function(){a(void 0)},children:"\xd7"})}),Object(u.jsxs)("div",{className:"recipe-edit__details-grid",children:[Object(u.jsx)("label",{className:"recipe-edit__label",name:"name",children:"Name"}),Object(u.jsx)("input",{type:"text",className:"recipe-edit__input",onChange:function(e){return r({name:e.target.value})},value:n.name}),Object(u.jsx)("label",{className:"recipe-edit__label",name:"name",children:"Cook Time"}),Object(u.jsx)("input",{type:"text",className:"recipe-edit__input",onChange:function(e){return r({cookingTime:e.target.value})},value:n.cookingTime}),Object(u.jsx)("label",{className:"recipe-edit__label",name:"name",children:"Servings"}),Object(u.jsx)("input",{type:"text",className:"recipe-edit__input",onChange:function(e){return r({servings:parseInt(e.target.value||"0")})},value:n.servings}),Object(u.jsx)("label",{className:"recipe-edit__label",name:"name",children:"Instructions"}),Object(u.jsx)("textarea",{className:"recipe-edit__input",onChange:function(e){return r({instructions:e.target.value})},value:n.instructions})]}),Object(u.jsxs)("div",{className:"recipe-edit__ingredients-container",children:[Object(u.jsx)("label",{className:"recipe-edit__label",children:"Ingredients"}),Object(u.jsxs)("div",{className:"recipe-edit__ingredients-grid",children:[Object(u.jsx)("div",{children:"Name"}),Object(u.jsx)("div",{children:"Amount"}),Object(u.jsx)("div",{}),n.ingredients.map((function(e){return Object(u.jsx)(h,{ingredient:e,removeIngredient:j,handleIngredientChange:d},e.id)}))]})]}),Object(u.jsx)("div",{className:"recipe-edit__add-ingredients-btn-container",children:Object(u.jsx)("button",{className:"btn btn-pry",onClick:function(){var e={id:Object(l.a)(),name:"",amount:""};r({ingredients:[].concat(Object(s.a)(n.ingredients),[e])})},children:"Add ingredient"})})]})},g="cookingWithReact.recipes",x=c.a.createContext();var _=function(){var e=Object(i.useState)(),n=Object(d.a)(e,2),t=n[0],c=n[1],a=Object(i.useState)(j),r=Object(d.a)(a,2),o=r[0],b=r[1],p=o.find((function(e){return e.id===t})),m={handleRecipeDelete:function(e){var n=o.filter((function(n){return n.id!==e}));c(void 0),b(n)},handleSetRecipeId:h,handleRecipeChange:function(e,n){var t=Object(s.a)(o),i=t.findIndex((function(n){return n.id===e}));t[i]=n,b(t)}};function h(e){c(e)}return Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem(g));e&&b(e)}),[]),Object(i.useEffect)((function(){localStorage.setItem(g,JSON.stringify(o))}),[o]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(x.Provider,{value:m,children:[Object(u.jsx)(O,{recipes:o,handleRecipeAdd:function(){var e={id:Object(l.a)(),name:"Name",cookingTime:"",servings:"0",instructions:"",ingredients:[{id:Object(l.a)(),name:"",amount:""}]};b((function(n){return console.log("A state change was recorded"),[].concat(Object(s.a)(n),[e])})),h(e.id)}}),t&&Object(u.jsx)(v,{recipe:p})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.599e5813.chunk.js.map