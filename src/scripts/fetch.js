import { Util } from "./util.js";
const util = new Util();

export class Fetch {
  
  async getIngredients(){
    const ingredients = [];
    const response = await fetch('https://spoonacular.com/application/frontend/downloads/top-1k-ingredients.csv');
    const data = await response.text();
    const table = data.split('\n');
    table.forEach((el) => {
      const col = el.split(';')
      ingredients.push(col[0]);
    })
    util.ingredientCheckbox(ingredients);
  }

  async findComplexID(params){
    let loader = document.getElementById('loader-second');
    loader.style.display = "block";
    for (let key in params){
      if (key === 'includeIngredients' && params[key].length > 0){
        params[key] = `&${key}=${encodeURIComponent(params[key])}`;
      } else if (key !== 'includeIngredients' && params[key] !== "") {
        params[key] = `&${key}=${encodeURIComponent(params[key])}`;
      }
    }

    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?number=8&ranking=1&instructionsRequired=true${params['includeIngredients']}${params['maxCalories']}${params['maxSodium']}${params['maxSugar']}${params['maxCholesterol']}${params['maxFat']}${params['maxCarbs']}${params['type']}${params['cuisine']}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
      }
    })
    .then(response => response.json())
    .then((data) => {
      this.getRecipeData(data.results[Math.floor(Math.random() * data.results.length)].id);
    })
    .catch(err => {
      let loader = document.getElementById('loader-first');
      let loader2 = document.getElementById('loader-second');
      loader.style.display = "none";
      loader2.style.display = "none";
      alert('recipe not found');
    });
  }

  async findRecipeID(ingredientsArr){
    let loader = document.getElementById('loader-first');
    loader.style.display = "block";
    let ingredients = encodeURIComponent(ingredientsArr);
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?instructionsRequired=true&ranking=2&addRecipeInformation=true&number=10&includeIngredients=${ingredients}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
      }
    })
    .then(response => response.json())
    .then((data) => {
      this.getRecipeData(data.results[Math.floor(Math.random() * data.results.length)].id);
    })
    .catch(err => {
      let loader = document.getElementById('loader-first');
      let loader2 = document.getElementById('loader-second');
      loader.style.display = "none";
      loader2.style.display = "none";
      alert('recipe not found');
    });
  }

  async getRecipeData(id){
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
        }
      })
      .then(response => response.json())
      .then((data) => {
        util.getMealData(data);
      })
      .catch(err => {
        console.error(err);
      });
  }

}
