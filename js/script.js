"use strict";

// լուծում եք class-ի պոլիմորֆիզմի հարցը

class Animal {
    constructor(animal) {
      this.animal = animal;
    }
    
    say() {
      if (this.animal === "dog") {
        console.log("woof, woof");
      } else if (this.animal === "cat") {
          console.log("meow, meow");
      } else {
        console.log(`rrr, I'm an animal`);
      }
    }
  }
  
  const dog = new Animal("dog");
  const cat = new Animal("cat");
  dog.say();
  cat.say();


  
//Տակի գծիկով Encapsulation

class OnlineBoutique {
    constructor(fullName, hours, webSite){
        this.fullName = fullName;
        this.hours = hours;
        this._webSite = webSite;
    }
        
        WebsiteAccess() {
        console.log(`Dear user, you have to know ${this._webSite}`);
    }
}

const newUser = new OnlineBoutique("Frida", "09:00 - 22:00", "www.FridaWeb.com");
console.log(newUser);
newUser.WebsiteAccess();
// New Version - private method imitation
newUser.webSite = "www.FridaWeb.ru";   //ՉԻ փոխվի
newUser.WebsiteAccess();



// work with STATIC ||

class MathActions {
    constructor() {
    }
    static SumCount() {
        return this.count += 1;
    }

    static getCount() {
        return this.count;
    }
}
MathActions.count = 7;
console.log(MathActions.SumCount());   // 8
console.log(MathActions.getCount()); 



// վանդականիշով Encapsulation, without get and set is hidden from public field...

class Movie {
    constructor (genre) {
        this.genre = genre;
    }

    #nameOfMovie = "Կտոր մը երկինք";   // private filed

    sayNameOfMovie() {
        console.log(`My favorite movie name is ${this.#nameOfMovie}`);
    }
    
}

const poghos = new Movie ("Melodrama");

poghos.#nameOfMovie = "Խնձորի այգին";

console.log(poghos.#nameOfMovie);

poghos.sayNameOfMovie();




// ներքին, լոկալ փոփոխականով

function Car (first, second, third) {
    this.first = first;
    this.second = second;
    let thr = third;

    this.carSay = function () {
        console.log(`My favorite cars are ${first} ${second} and ${third}`);
    };
}

const driver = new Car("BMW", "Mini Cooper", "Mersedes");
console.log(driver);  
driver.carSay();
driver.third = "Nissan Tiida";   //ՉԻ փոխվի
driver.carSay();

console.log(driver.thr);  //undefined