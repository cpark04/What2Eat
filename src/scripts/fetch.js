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

  findComplexID(params){
    
    for (let key in params){
      if (key === 'includeIngredients' && params[key].length > 0){
        params[key] = `&${key}=${encodeURIComponent(params[key])}`;
      } else if (key !== 'includeIngredients' && params[key] !== "") {
        params[key] = `&${key}=${params[key]}`;
      }
    }

    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?number=20&ranking=2&instructionsRequired=true${params['includeIngredients']}${params['maxCalories']}${params['maxSodium']}${params['maxSugar']}${params['maxCholesterol']}${params['maxFat']}${params['maxCarbs']}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      let randomRecipe = data.results[Math.floor(Math.random() * data.results.length)]
      let recipeID = randomRecipe.id
      let nutrition = {
        'calories': randomRecipe.calories,
        'carbs': randomRecipe.carbs,
        'fat': randomRecipe.fat
      };
      util.renderNutrition(nutrition)
      this.getRecipeData(recipeID);
    })
    .catch(err => {
      console.error(alert('recipe not found'), err);
    });
  }

  findRecipeID(ingredientsArr){
    let ingredients = encodeURIComponent(ingredientsArr);
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?instructionsRequired=true&ranking=2&addRecipeInformation=true&number=20&includeIngredients=${ingredients}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      this.getRecipeData(data.results[Math.floor(Math.random() * data.results.length)].id);
    })
    .catch(err => {
      console.error(alert('recipe not found'), err);
    });
  }

  getRecipeData(id){
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

  // getMealData(id){
  //   fetch(`https://themealdb.p.rapidapi.com/lookup.php?i=${id}`, {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "themealdb.p.rapidapi.com",
  //       "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then((data) => {
  //     util.getMealData(data.meals[0])
  //   })
  // }


  // getIngredients(){
  //   return fetch("https://themealdb.p.rapidapi.com/list.php?i=list", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "themealdb.p.rapidapi.com",
  //       "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     let ingred = data.meals;
  //     return data.meals;
  //     // util.ingredientCheckbox(ingred);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }

  // getCategories(){
  //   fetch("https://themealdb.p.rapidapi.com/list.php?c=list", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "themealdb.p.rapidapi.com",
  //       "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(categories => {
  //     let catArr = categories.meals;
  //     util.categoryDropdown(catArr);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }

  // getAreas(){
    
  // }

  // findRecipeID(ingredients, category){
  //   let ingred =ingredients.join("%2C")
  //   console.log(ingred)
  //   fetch(`https://themealdb.p.rapidapi.com/filter.php?i=${ingred}&c=${category}`, {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "themealdb.p.rapidapi.com",
  //       "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     let meal = data.meals[Math.floor(Math.random()*data.meals.length)]
  //     console.log(meal)
  //     this.getMealData(meal.idMeal)
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }

  //------------------newAPI-------------------

}
