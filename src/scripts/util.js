export class Util {
  
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

  renderIngredients(ingredients) {
    let ul = document.querySelector('#ingredient-list');
    ul.append("Ingredients:")
    ingredients.forEach((el) => {
      let li = document.createElement('li');
      li.innerText = el;
      ul.append(li);
    })
  }

  renderDirections(directions){
    let ol = document.querySelector('#directions-list');
    directions.forEach((dir) => {
      let li = document.createElement('li');
      li.innerText = dir;
      ol.append(li);
    })
    // let div = document.getElementById('directions');
    // div.innerText = directions;

  }

  clearData(){
    let ids = ['title-render', 'picture', 'ingredient-list', 'directions-list'];
    ids.forEach((id) => {
      let div = document.getElementById(`${id}`);
      div.innerText = "";
    })
  }

}