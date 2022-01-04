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
  document.getElementById('select-box-form').addEventListener('submit', e => getIngredClick(e));
  document.getElementById('filter-button').addEventListener('click', e => toggleFilter(e))
  document.getElementById('complex-button').addEventListener('click', e => getComplexClick(e))
}

function getComplexClick(e) {
  e.preventDefault();
  let ingredientsArr = ingredientParams();
  let maxCal = document.getElementById('max-cal').value;
  let maxSodium = document.getElementById('max-sodium').value;
  let maxSugar = document.getElementById('max-sugar').value;
  let maxChol = document.getElementById('max-chol').value;
  let maxFat = document.getElementById('max-fat').value;
  let maxCarbs = document.getElementById('max-carbs').value;
  console.log(maxChol)
  fetch.findComplexID([ingredientsArr, maxCal, maxSodium, maxSugar, maxChol, maxFat, maxCarbs])
}

function getIngredClick(e) {
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


function ingredientParams(){
  let ingredients = [];
  document.querySelectorAll('select.select-box option').forEach((ingred) => {
    ingredients.push(ingred.value)
  });
  return ingredients
}
