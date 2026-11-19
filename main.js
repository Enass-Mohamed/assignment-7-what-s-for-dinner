let recipes = [
    {
        name: "Caesar Salad",
        description: "Classic salad with crispy romaine and creamy dressing",
        category: "Mediterranean",
        difficulty: "Easy",
        prepTime: "15 min",
        cookTime: "0 min",
        servings: "2 people",

        image: "https://images.unsplash.com/photo-1546793665-c74683d2f6a1",

        ingredients: [
            "1 large romaine lettuce",
            "1/2 cup Caesar dressing",
            "1/2 cup parmesan cheese",
            "1 cup croutons",
            "2 anchovy fillets (optional)",
            "Lemon wedges",
            "Black pepper"
        ],

        instructions: [
            "Wash and dry romaine lettuce thoroughly.",
            "Place lettuce in a large salad bowl.",
            "Add Caesar dressing and mix well.",
            "Add croutons and parmesan cheese.",
            "Top with remaining cheese and serve."
        ],

        nutrition: {
            calories: "320 kcal",
            protein: "12g",
            carbohydrates: "18g",
            fat: "22g",
            fiber: "3g",
            sodium: "680mg"
        },

        tips: [
            "Use cold, crisp lettuce for best texture.",
            "Make homemade croutons for better flavor.",
            "Add grilled chicken for a complete meal.",
            "Don't add dressing until ready to serve."
        ]
    },

    {
        name: "Chicken Pasta",
        description: "Delicious creamy pasta with tender chicken",
        category: "Italian",
        difficulty: "Medium",
        prepTime: "10 min",
        cookTime: "25 min",
        servings: "3 people",

        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",

        ingredients: [
            "250g pasta",
            "200g chicken breast",
            "1 cup cooking cream",
            "2 cloves garlic",
            "1/2 cup parmesan cheese",
            "2 tablespoons olive oil",
            "Salt and black pepper"
        ],

        instructions: [
            "Boil pasta in salted water until cooked.",
            "Cut chicken into small pieces.",
            "Heat olive oil and cook the chicken.",
            "Add garlic and cooking cream.",
            "Add pasta and parmesan cheese. Mix well."
        ],

        nutrition: {
            calories: "450 kcal",
            protein: "28g",
            carbohydrates: "52g",
            fat: "15g",
            fiber: "4g",
            sodium: "520mg"
        },

        tips: [
            "Don't overcook the pasta.",
            "Add a little pasta water to the sauce.",
            "Use fresh garlic for better flavor.",
            "Garnish with fresh parsley."
        ]
    },

    {
        name: "Margherita Pizza",
        description: "Classic Italian pizza with tomato and mozzarella",
        category: "Italian",
        difficulty: "Medium",
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people",

        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",

        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "150g mozzarella cheese",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "1 teaspoon oregano",
            "A pinch of salt"
        ],

        instructions: [
            "Preheat the oven to 220°C.",
            "Roll out the pizza dough.",
            "Spread tomato sauce over the dough.",
            "Add mozzarella cheese and oregano.",
            "Bake for 12-15 minutes.",
            "Add fresh basil leaves and serve."
        ],

        nutrition: {
            calories: "380 kcal",
            protein: "16g",
            carbohydrates: "45g",
            fat: "14g",
            fiber: "3g",
            sodium: "750mg"
        },

        tips: [
            "Preheat the oven before baking.",
            "Use fresh mozzarella cheese.",
            "Don't add too much tomato sauce.",
            "Add fresh basil after baking."
        ]
    }

];

let recipeName = document.getElementById("recipeName");
let description = document.getElementById("description");

let category = document.getElementById("category");
let difficulty = document.getElementById("difficulty");

let prepTime = document.getElementById("prepTime");
let cookTime = document.getElementById("cookTime");
let servings = document.getElementById("servings");

let hero = document.getElementById("hero");
let tabContent = document.getElementById("tabContent");

let changeBtn = document.getElementById("changeRecipe");

let saveBtn = document.getElementById("saveBtn");
let shareBtn = document.getElementById("shareBtn");

let navSave = document.getElementById("navSave");


let currentRecipe = 0;
let currentTab = "ingredients";
let isSaved = false;

function displayRecipe(index) {

    let recipe = recipes[index];

    recipeName.innerText = recipe.name;

    description.innerText = recipe.description;

    category.innerText = recipe.category;

    difficulty.innerText = recipe.difficulty;

    prepTime.innerText = recipe.prepTime;

    cookTime.innerText = recipe.cookTime;

    servings.innerText = recipe.servings;

    hero.style.backgroundImage =
        `url("${recipe.image}")`;

    isSaved = false;

    saveBtn.innerHTML =
        '<i class="fa-regular fa-bookmark"></i>';

    navSave.style.color = "#526071";

    displayTab(currentTab);

}

function displayIngredients(recipe) {

    let content = "";

    for (let i = 0; i < recipe.ingredients.length; i++) {

        content += `
            <div class="ingredient">

                <span class="number">${i + 1}</span>

                <span>${recipe.ingredients[i]}</span>

            </div>
        `;

    }

    tabContent.innerHTML = content;

}

function displayInstructions(recipe) {

    let content = "";

    for (let i = 0; i < recipe.instructions.length; i++) {

        content += `
            <div class="instruction">

                <span class="step-number">${i + 1}</span>

                <span>${recipe.instructions[i]}</span>

            </div>
        `;

    }

    tabContent.innerHTML = content;

}

function displayNutrition(recipe) {

    let content = `

        <div class="nutrition">

            <div class="nutrition-item">
                <span>🔥 Calories</span>
                <strong>${recipe.nutrition.calories}</strong>
            </div>

            <div class="nutrition-item">
                <span>Protein</span>
                <strong>${recipe.nutrition.protein}</strong>
            </div>

            <div class="nutrition-item">
                <span>Carbohydrates</span>
                <strong>${recipe.nutrition.carbohydrates}</strong>
            </div>

            <div class="nutrition-item">
                <span>Fat</span>
                <strong>${recipe.nutrition.fat}</strong>
            </div>

            <div class="nutrition-item">
                <span>Fiber</span>
                <strong>${recipe.nutrition.fiber}</strong>
            </div>

            <div class="nutrition-item">
                <span>Sodium</span>
                <strong>${recipe.nutrition.sodium}</strong>
            </div>

        </div>

    `;

    tabContent.innerHTML = content;

}

function displayTips(recipe) {

    let content = "";

    for (let i = 0; i < recipe.tips.length; i++) {

        content += `

            <div class="tip">

                <i class="fa-solid fa-circle-check"></i>

                ${recipe.tips[i]}

            </div>

        `;

    }

    tabContent.innerHTML = content;

}

function displayTab(tab) {

    let recipe = recipes[currentRecipe];

    if (tab === "ingredients") {

        displayIngredients(recipe);

    }

    else if (tab === "instructions") {

        displayInstructions(recipe);

    }

    else if (tab === "nutrition") {

        displayNutrition(recipe);

    }

    else if (tab === "tips") {

        displayTips(recipe);

    }

}

let tabs = document.querySelectorAll(".tab");

tabs.forEach(function(button) {

    button.addEventListener("click", function() {

        tabs.forEach(function(tab) {

            tab.classList.remove("active");

        });

        button.classList.add("active");

        currentTab = button.getAttribute("data-tab");

        displayTab(currentTab);

    });

});

function getRandomRecipe() {

    let randomNumber;

    do {

        randomNumber = Math.floor(Math.random() * recipes.length);

    }

    while (randomNumber === currentRecipe);

    currentRecipe = randomNumber;

    displayRecipe(currentRecipe);

}

changeBtn.addEventListener("click", function() {

    getRandomRecipe();

});

saveBtn.addEventListener("click", function() {

    isSaved = !isSaved;

    if (isSaved) {

        saveBtn.innerHTML =
            '<i class="fa-solid fa-bookmark"></i>';

        navSave.style.color = "#f4770a";

    }

    else {

        saveBtn.innerHTML =
            '<i class="fa-regular fa-bookmark"></i>';

        navSave.style.color = "#526071";

    }

});

shareBtn.addEventListener("click", function() {

    let recipe = recipes[currentRecipe];

    if (navigator.share) {

        navigator.share({

            title: recipe.name,

            text: recipe.description

        });

    }

    else {

        alert("Your recipe is: " + recipe.name);

    }

});

displayRecipe(currentRecipe);
