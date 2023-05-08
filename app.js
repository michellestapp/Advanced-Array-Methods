
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
  //      console.log("el inside filterExample's filter: ", el)
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results;
    results = dishes.filter(function(el){
        if(el.cuisine === "Vegetarian"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let vegetarian = problemOne();
console.log('Vegetarian dishes', vegetarian)

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter
// function problemTwo(cuisineType){

//     let results;
//     results = dishes.filter(function(el){
//         if(el.cuisine === cuisineType){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let cuisineChoice = prompt("What type of cuisine dishes are you looking for?");

// let cuisine = problemTwo(cuisineChoice);
// console.log(` ${cuisineChoice} dishes are:`, cuisine)


//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function problemThree(){

    let results;
    results = dishes.filter(function(el){
        if(el.cuisine === "Vegetarian" && el.servings > 5){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let italianServings = problemThree();
console.log('Italian cuisine with serving size > 5 are:', italianServings)


//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter
function problemFour(){

    let results;
    results = dishes.filter(function(el){
        if(el.id === el.servings){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let idEqualServing = problemThree();
console.log('Dishes whose id is equal to their serving size: ', idEqualServing)


//5. Create a function that will return only dishes whose serving count is even.
//Filter
function problemFive(){

    let results;
    results = dishes.filter(function(el){
        
        if(el.servings%2 == 0){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let evenServingSize = problemFive();
console.log('Dishes whose serving size is an even number: ', evenServingSize)


//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter
function problemSix(){

    let results;
    results = dishes.filter(function(el){
        
        if(el.ingredients.includes("chickpea")){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let chickpeas = problemSix();
console.log('Dishes that have chickpeas in the ingredients: ', chickpeas)



//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter
// function problemSeven(choice){

//     let results;
//     results = dishes.filter(function(el){
        
//         if(el.ingredients.includes(choice)){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }
// let ingredientChoice = prompt("Enter an ingredient to find what dishes have that ingredient");

// let ingrArray = problemSeven(ingredientChoice);
// console.log(`Dishes that have ${ingredientChoice} in the ingredients: `, ingrArray)



//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map
function problemEight(){
    let results;
    results = dishes.map(function(el){
        return el.cuisine
    })
    return results
}

let cuisineTypes = problemEight();
console.log("The different cuisines in the array dishes are: ", cuisineTypes )


//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function problemNine(){
    let results;
    results = dishes.map(function(el){
        return `${el.cuisine} ${el.name}`
    })
    return results
}

let cuisineName = problemNine();
console.log("The cuisine and name appended array:", cuisineName)



//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

function problemTen(){
  
        let vegdishes;
        vegdishes = dishes.filter(function(el){
            if (el.cuisine === 'Vegetarian'){
                return true
            }
            else{
                return false
            }
        })

        let results;
        results = vegdishes.map(function(el){
        return `${el.cuisine} ${el.name}`
    })
    return results
       
}

let vegDishes = problemTen()
console.log("Vegetarian dishes are: ", vegDishes)



//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

function problemBonus1(){
    let results;
    results = dishes.map(function(el){
        return el.cuisine
    })

    let newArray=results.filter(function(el,index){
        return results.indexOf(el) === index;
    })
    return newArray
}

let noDuplicates = problemBonus1();
console.log("The different types of cuisines are: ", noDuplicates)

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
