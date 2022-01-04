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
  modalToggle();
  bindEvents();  
});





function bindEvents(){
  document.getElementById('select-box-form').addEventListener('submit', e => getIngredClick(e));
  document.getElementById('filter-button').addEventListener('click', e => toggleFilter(e))
  document.getElementById('complex-button').addEventListener('click', e => getComplexClick(e))
}

function getComplexClick(e) {
  e.preventDefault();
  let hiddenBox = document.querySelectorAll('.show');
  hiddenBox.forEach(el => el.classList.remove('hide'));
  let params = {}
  params['includeIngredients'] = ingredientParams();
  params['maxCalories'] = document.getElementById('max-cal').value;
  params['maxSodium'] = document.getElementById('max-sodium').value;
  params['maxSugar'] = document.getElementById('max-sugar').value;
  params['maxCholesterol'] = document.getElementById('max-chol').value;
  params['maxFat'] = document.getElementById('max-fat').value;
  params['maxCarbs'] = document.getElementById('max-carbs').value;
  console.log(params)
  fetch.findComplexID(params)
}

function getIngredClick(e) {
  e.preventDefault();
  let hiddenBox = document.querySelectorAll('.show');
  hiddenBox.forEach(el => el.classList.remove('hide'));
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

function modalToggle(){
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("ingred-button");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
    util.clearData();
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      util.clearData();
    }
  }
}
