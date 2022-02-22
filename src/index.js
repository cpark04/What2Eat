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
  togglePopup();
});





function bindEvents(){
  document.getElementById('select-box-form').addEventListener('submit', e => getIngredClick(e));
  document.getElementById('filter-button').addEventListener('click', e => toggleFilter(e));
  document.getElementById('complex-button').addEventListener('click', e => getComplexClick(e));
  document.getElementById('about-button').addEventListener('click', e => openPopup(e));
}

function getComplexClick(e) {
  e.preventDefault();
  e.stopPropagation();
  let hiddenBox = document.querySelectorAll('.show');
  hiddenBox.forEach(el => el.classList.remove('hide'));
  let params = {}
  params['includeIngredients'] = ingredientParams();
  params['type'] = mealTypeParam();
  params['cuisine'] = cuisineParam();
  // params['diet'] = dietParam();
  params['maxCalories'] = document.getElementById('max-cal').value;
  params['maxSodium'] = document.getElementById('max-sodium').value;
  params['maxSugar'] = document.getElementById('max-sugar').value;
  params['maxCholesterol'] = document.getElementById('max-chol').value;
  params['maxFat'] = document.getElementById('max-fat').value;
  params['maxCarbs'] = document.getElementById('max-carbs').value;
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
  e.preventDefault();
  console.log(e)
  e.target.innerHTML === "Need More Options?" ? e.target.innerHTML = "Need Fewer Options?" : e.target.innerHTML = "Need More Options?"
  let filterBox = document.getElementById('filter-box-render');
  let ingredButton = document.getElementById('ingred-button');
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

function mealTypeParam(){
  let mealType;
  document.querySelectorAll('#meal-type-list option').forEach((el) => {
    if (el.selected) mealType = el.value;
  })
  return mealType;
}

function cuisineParam(){
  let cuisine;
  document.querySelectorAll('#cuisine-list option').forEach((el) => {
    if (el.selected) cuisine = el.value;
  })
  return cuisine;
}

function dietParam(){
  let diet;
  document.querySelectorAll('#diet-list option').forEach((el) => {
    if (el.selected) diet = el.value;
  })
  return diet;
}

function togglePopup(){
  let modal = document.getElementById("myModal");
  let popup = document.getElementById("myModal-popup");
  let span = document.getElementsByClassName("close")[1];
  let span2 = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
    util.clearData();
  }
  span2.onclick = function() {
    popup.style.display = "none";
    util.clearData();
  }

  window.onclick = function(event) {
    if (event.target == modal || event.target == popup) {
      modal.style.display = "none";
      popup.style.display = "none";
      util.clearData();
    }
  }
}

function openPopup(e){
  e.preventDefault();
  e.stopPropagation();
  let popup = document.getElementById("myModal-popup");
  popup.style.display = "block";
}
