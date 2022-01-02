export class Util {
  
  dropCheckbox(){
    var checkList = document.getElementById('list1');
    checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
      if (checkList.classList.contains('visible')) checkList.classList.remove('visible');
      else checkList.classList.add('visible');
    }
  }
  
  getMealData(mealData){
    console.log(mealData);
    let title = mealData.strMeal;
    console.log(title);
    let area = mealData.strArea;
    let ingredients = [];
    let measurements = [];
    let directions = mealData.strInstructions;
    let ytVideo = mealData.strYoutube;
    let picture = mealData.strMealThumb;
    Object.keys(mealData).forEach((prop) => {
      if (mealData[prop] && prop.includes('strIngredient')) ingredients.push(mealData[prop]);
      if (mealData[prop] && prop.includes('strMeasure')) measurements.push(mealData[prop]);
    })
    this.renderPicture(picture);
    this.renderTitle(title);
    this.renderMeasurements(measurements, ingredients);
    this.renderDirections(directions);
    console.log(directions);
  }
  
  ingredientCheckbox(ingredients) {
    ingredients.forEach((ingredient) => {
      let ul = document.querySelector("ul.items");
      let li = document.createElement('li');
      let value = ingredient.strIngredient.split(' ').map((word) => word.toLowerCase()).join('_');
      li.innerHTML = `<input class='ingred-checkbox' type='checkbox' value=${value} />${ingredient.strIngredient}`;
      ul.append(li);
    })
  }

  renderPicture(picture) {
    let div = document.querySelector("#picture");
    let img = document.createElement('img');
    img.setAttribute('src', picture);
    div.append(img);
  }

  renderTitle(title) {
    let section = document.querySelector('#title-render');
    section.innerText = title;
  }

  renderMeasurements(measurements, ingredients) {
    let ingredMeasure = [];
    measurements.forEach((el1, i) => {
      ingredients.forEach((el2, j) => {
        if (i === j) ingredMeasure.push(el1 + ' ' + el2);
      })
    })
    ingredMeasure.forEach((el) => {
      let ul = document.querySelector('#ingredient-list');
      let li = document.createElement('li');
      li.innerText = el;
      ul.append(li);
    })
  }

  renderDirections(directions){
    let div = document.querySelector('#directions');
    div.innerHTML = directions;
  }



}