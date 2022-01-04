import {Fetch} from "./scripts/fetch.js"
import { Util } from "./scripts/util.js";

let util = new Util();
let fetch = new Fetch();

document.addEventListener("DOMContentLoaded", async () => {
  await fetch.getIngredients();
  new Choices('#select-box', {
    placeholderValue: "search for ingredients"
  })
  // util.ingredientCheckbox();
  // fetch.getCategories();
  // let ingredientList = await fetch.getIngredients();
  bindEvents();  
});

function bindEvents(){
  document.getElementById('select-box-form').addEventListener('submit', e => checkboxSearchClick(e));
  // document.getElementById('params-form').addEventListener('submit', e => paramSearchClick(e));
}

function checkboxSearchClick(e) {
  e.preventDefault();
  let ingredients = ingredientParams();
  // let category = categoryParams();
  fetch.findRecipeID(ingredients);
}

function paramSearchClick(e) {
  e.preventDefault();
}

function ingredientParams(){
  let ingredients = [];
  document.querySelectorAll('select.select-box option').forEach((ingred) => {
    ingredients.push(ingred.value)
  });
  return ingredients
}

// function categoryParams(){
//   let category;
//   document.querySelectorAll('.category-option').forEach((option) => {
//     if (option.selected) category = option.value;
//   });
//   console.log(category);
//   return category;
// }