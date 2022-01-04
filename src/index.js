import {Fetch} from "./scripts/fetch.js"
import { Util } from "./scripts/util.js";

let util = new Util();
let fetch = new Fetch();

document.addEventListener("DOMContentLoaded", async () => {
  await fetch.getIngredients();
  new Choices('#select-box', {
    placeholderValue: "search for ingredients",
    allowHTML: true
  })
  bindEvents();  
});

function bindEvents(){
  document.getElementById('select-box-form').addEventListener('submit', e => checkboxSearchClick(e));
  document.getElementById('filter-button').addEventListener('click', e => toggleFilter(e))
}

function checkboxSearchClick(e) {
  e.preventDefault();
  let ingredients = ingredientParams();
  fetch.findRecipeID(ingredients);
}

function toggleFilter(e) {
  let filterBox = document.getElementById('filter-box-render');
  let ingredButton = document.getElementById('ingred-button');
  console.log(ingredButton)
  filterBox.classList.toggle('hide');
  ingredButton.classList.toggle('hide');
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