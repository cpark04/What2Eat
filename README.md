# javascript-project-what2Eat

## Live Link

[what2Eat](https://cpark04.github.io/What2Eat/ "what2Eat Home Page")


## Background

What2Eat is a website that will help users generate recipes based on the parameters they can filter through. The initial search will take ingredient inputs from the user and do a basic search, displaying a random recipe. This will help users clear out their refridgerator, minimizing waste while cooking delicious meals. They will also have an option to filter out recipes based on user preferences/diet.

## Functionality & MVPs

In What2Eat, users will be able to:

- Generate recipes based on what ingredients users have on hand.
- The page will refresh and display the new recipe.
- Generate recipes based on user parameters such as meal type, cuisine, and nutrition goals.

In addition, this project will include:

- An About modal giving the user context and instructions.
- A production README.

## WireFrames

![Wireframe1](https://i.imgur.com/1h91Umb.png)

- This will be the homepage of What2Eat's website.
- When the page initially loads, a modal will popup providing the user context and instructions.
- The search bar will have an autocomplete/checkbox component so the user can search through the allowed ingredients in a simplified manner.
- The more filters button will show the hidden extra search parameters box. It will act as a toggle.

![Wireframe2](https://i.imgur.com/M6fYHcJ.png)

- After the user starts the search for a recipe, the page will refresh to a recipe page
- If there's no recipe, an alert will display that there was no recipe found.
- The preperation information will include the prep time, cook time, and serving amounts.
- The source link will open a new page showing the direct source of the recipe.


## Technologies, Libraries, APIs

This project will be implemented with the following technologies:

- The [Spoonacular API](https://spoonacular.com/food-api) to possibly grab recipes and ingredient information on. The benefits of this API is that it is very extensive and has all the data needed to construct my project on its own. But the free version only allows 150 requests per day which might be an issue.

## Implementation Timeline

NB: 

- **Friday - Sunday:** Setup my project and build a basic website with the nav links and logos, making sure everything redirects the user correctly.

- **Monday:** Implement my API's and start testing to see if the data is being pulled correctly.

- **Tuesday:** Complete the rest of the webpages for each recipe. Make sure my generators are working correctly and provide recipes based on user parameters.

- **Wednesday - Thursday:** Finish off the website with CSS to make it a more pleasant experience for the user.  

## Bonus features

If time permits, the website will also include these features:
- When searching for a recipe have a popup/modal display instead of refreshing the page.
- The modal will repop-up when generating a new recipe, erasing the data for the previous recipe.
