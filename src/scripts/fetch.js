import { Util } from "./util.js";
const util = new Util();

export class Fetch {
  
  getMealData(id){
    fetch(`https://themealdb.p.rapidapi.com/lookup.php?i=${id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
      }
    })
    .then(response => response.json())
    .then((data) => {
      util.getMealData(data.meals[0])
    })
  }


  getIngredients(){
    fetch("https://themealdb.p.rapidapi.com/list.php?i=list", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
      }
    })
    .then(response => response.json())
    .then(data => {
      let ingred = data.meals;
      util.ingredientCheckbox(ingred);
    })
    .catch(err => {
      console.error(err);
    });
  }

  findRecipeID(paramsArr){
    let str =paramsArr.join("%2C")
    fetch(`https://themealdb.p.rapidapi.com/filter.php?i=${str}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
        "x-rapidapi-key": "2cc4db5fb2msh8f17f4281122426p16f2aejsn5bf0f65021ab"
      }
    })
    .then(response => response.json())
    .then(data => {
      let meal = data.meals[Math.floor(Math.random()*data.meals.length)]
      console.log(meal)
      this.getMealData(meal.idMeal)
    })
    .catch(err => {
      console.error(err);
    });
  }
}
