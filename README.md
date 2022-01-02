# javascript-project-What2Eat


## Background

What2Eat is a website that will help users generate recipes based on the parameters they can filter through. The generator will have different parameters such as meal type, cuisine, and prep difficulty. What2Eat will also have a generator that can recommend recipes based on the ingredients the user has on hand. This will help users clear out their refridgerator, minimizing waste while cooking delicious meals.

## Functionality & MVPs

In What2Eat, users will be able to:

- Generate recipes based on user parameters such as meal type, cuisine, and prep difficulty.
- Generate recipes based on what ingredients users have on hand.
- Browse through all recipes if they prefer.
- Have a search functionality to find a specific recipe.

## WireFrames

![Wireframe1](https://i.imgur.com/01LCEEc.png)

- This will be the homepage of What2Eat's website.
- Top left will have a click-able logo that will redirect users back to the homepage.
- The search bar will include a button to search for recipes based on the text written in the input field.
- Social media will include small buttons that will redirect users to github, facebook, instagram.
- Nav links will include links to Recipes, Recipe Generator and an About Page.
- The bottom 2 Recipes of the Day will display a title and photo of a recipe.

![Wireframe2](https://i.imgur.com/bE920UF.png)

- Recipe Info will hold information such as prep time, cook time, total time, and serving size
- Ingredients will list all ingredients needed for the recipe.
- Instructions will list all the directions in bulleted form.

## Technologies, Libraries, APIs

This project will be implemented with the following technologies:

- The [Spoonacular API](https://spoonacular.com/food-api) to possibly grab recipes and ingredient information on. The benefits of this API is that it is very extensive and has all the data needed to construct my project on its own. But the free version only allows 150 requests per day which might be an issue.
- The [Tasty API](https://rapidapi.com/apidojo/api/tasty/) would be also another great API but free plan only allows 500 requests per month.
- The [TheMealDB API](https://www.themealdb.com/api.php) is completely free but is very limited on recipes.

## Implementation Timeline

NB: 

- **Friday - Sunday:** Setup my project and build a basic website with the nav links and logos, making sure everything redirects the user correctly.

- **Monday:** Implement my API's and start testing to see if the data is being pulled correctly.

- **Tuesday:** Complete the rest of the webpages for each recipe. Make sure my generators are working correctly and provide recipes based on user parameters.

- **Wednesday - Thursday:** Finish off the website with CSS to make it a more pleasant experience for the user.  

## Bonus features

If time permits, the website will also include these features:
- Be able to adjust the serving size and reflect the changes in the ingredient list and instructions.
- On each recipe page, add a section suggesting similar recipes.
