//The menu and courses objects and properties for courses
const menu = {
  //This property will ultimately contain a mapping between each course and the dishes available to order in that course
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
 
    //Creating getter and setter methods for the appetizers, mains, and desserts properties.
    get appetizers() {
     return this._appetizers;
    },
    set appetizers(appetizersIn) {
     this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains
    },
    set mains(mainsIn) {
       this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
 
  //creating an empty getter method for the _courses property.
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
},
  
  //creating a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
   
    this._courses[courseName].push(dish);
  },
 
//function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
 
  //function which will automatically generate a three-course meal for us.
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
   
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  },
};
//Adding dishes to menu
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Shrimp Cocktail', 5.36);
menu.addDishToCourse('appetizers', 'Stuffed Cherry Peppers', 3.10);
menu.addDishToCourse('appetizers', 'Fried Ravioli', 2.50);
menu.addDishToCourse('appetizers', 'Pomegranate Guacamole', 5.00);
menu.addDishToCourse('mains', 'Sheperds Pie', 15.00);
menu.addDishToCourse('mains', 'Beef Stroganoff', 20.00);
menu.addDishToCourse('mains', 'Savory Beef Stir-Fry', 13.00);
menu.addDishToCourse('mains', 'All-American Roast Beef', 25.00);
menu.addDishToCourse('mains', 'Corned Beef and Cabbage', 17.00);
menu.addDishToCourse('desserts', 'Ice Cream Sandwich', 11.90);
menu.addDishToCourse('desserts', 'Strawberry Angel Food', 13.00);
menu.addDishToCourse('desserts', 'Sopapilla Cheesecake', 12.00);
menu.addDishToCourse('desserts', 'Chocolate Eclair', 11.50);
menu.addDishToCourse('desserts', 'Lemon Poppy Seed Cake', 17.42);
//Generating a meal
let meal = menu.generateRandomMeal();
console.log(meal);