'use strict';
///F😳cking with classes

/*This is a class declaration, it lets us define our class,
it consists of a name, a constructor(optional), an  */
class animal {
    constructor(type, foodSource) {
        this.type = type;
        this.foodSource = foodSource;
    }
}

//When you declare a variable with the class animal you are creating an instance of an animal
let anteater = new animal('mammal', 'ants');
console.log(anteater.foodSource);

//This is a class expression, basically defining a variable as a class.
//You can use let const, or var(🤮) here.
let dog = class extends animal {
    constructor(name, breed) {
    this.name = name;
        this.breed = breed;
}};

///Now I want to dig into something called inheritence. 
//With inheritence things can inherit other things.
//So our dog can inherit all the aspect of an animal. Make sense?


