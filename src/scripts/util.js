export class Util {
  // comment
  ingredientCheckbox(ingredients) {
    let select = document.querySelector(".select-box");
    ingredients.forEach((ingredient) => {
      let option = document.createElement('option');
      option.setAttribute('class', 'ingred-checkbox');
      option.setAttribute('value', ingredient);
      option.innerHTML = ingredient;
      select.append(option);
    });
  }

  categoryDropdown(catArr) {
    catArr.forEach((category) => {
      let select = document.querySelector("#category-select");
      let value = category.strCategory;
      let option = document.createElement('option');
      option.setAttribute('value', value);
      option.setAttribute('class', 'category-option');
      option.innerText = value;
      select.append(option);
    });
  }

  getMealData(mealData){
    this.clearData();
    console.log(mealData);
    let title = mealData.title;
    let ingredients = [];
    let directions = [];
    let sourceURL = mealData.sourceUrl;
    let picture = mealData.image;
    let prepTime = mealData.preparationMinutes;
    let cookTime = mealData.cookingMinutes;
    let servings = mealData.servings;
    if (mealData.analyzedInstructions.length < 1) {
      directions = [`Sorry, this recipe has no instructions. Please try the source page at ${sourceURL}`];
    } else {
      mealData.analyzedInstructions[0].steps.forEach((instruction) => directions.push(instruction.step));
    }
    mealData.extendedIngredients.forEach((ingred) => ingredients.push(ingred.originalString))
    this.renderPicture(picture);
    this.renderTitle(title);
    this.renderIngredients(ingredients);
    this.renderDirections(directions);
    this.renderSource(sourceURL);
    this.renderPrepInfo(prepTime, cookTime, servings);
  }
  
  renderPicture(picture) {
    let div = document.querySelector("#picture");
    let img = document.createElement('img');
    img.setAttribute('src', picture);
    div.append(img);
  }

  renderTitle(title) {
    let div = document.querySelector('#title-render');
    let span = document.createElement('span');
    span.setAttribute('class', 'title');
    span.innerHTML = title;
    div.append(span);
  }

  renderIngredients(ingredients) {
    let div = document.querySelector('#ingredients')
    let ul = document.querySelector('#ingredient-list');
    ingredients.forEach((el) => {
      let li = document.createElement('li');
      li.innerText = el;
      ul.append(li);
    })
  }

  renderPrepInfo(prepTime, cookTime, servings) {
    let timeNumber = document.getElementById('time-number');
    let readyNumber = document.getElementById('ready-number');
    let servingsNumber = document.getElementById('servings-number');
    timeNumber.innerText = prepTime;
    readyNumber.innerText = prepTime;
    servingsNumber.innerText = prepTime;
  }

  renderDirections(directions){
    let div = document.querySelector('#directions');
    let ol = document.createElement('ol');
    ol.setAttribute('id', 'directions-list');
    div.append('Directions:');
    div.append(ol);

    let newOl = document.querySelector('#directions-list')
    directions.forEach((dir) => {
      let li = document.createElement('li');
      li.innerText = dir;
      newOl.append(li);
    })
  }

  renderSource(url){
    let div = document.getElementById('source-url');
    let a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    a.setAttribute('class', 'source-url');
    a.innerText = "Recipe Source";
    div.append(a);
  }

  clearData(){
    let ids = ['title-render', 'picture', 'ingredient-list', 'directions', 'source-url'];
    ids.forEach((id) => {
      let div = document.getElementById(`${id}`);
      div.innerText = "";
    })
  }

}