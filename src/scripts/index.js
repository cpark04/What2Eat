import {Fetch} from "./fetch.js"
import { Util } from "./util.js";

let util = new Util();
let fetch = new Fetch();

document.addEventListener("DOMContentLoaded", () => {
  util.dropCheckbox();
  fetch.getIngredients();
  bindEvents();
  // fetch.getInstruct();
  
});

function bindEvents(){
  document.getElementById('param-form').addEventListener('submit', e => recipeSearchClick(e));
  console.log('hi');
}

function recipeSearchClick(e) {
  e.preventDefault();
  let search = [];
  document.querySelectorAll('.ingred-checkbox').forEach((ingred) => {
    if (ingred.checked) search.push(ingred.getAttribute("value"))
  });
  fetch.findRecipeID(search);
}