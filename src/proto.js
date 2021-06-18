class Animal {
    voice() {
        console.log(`Hi, I'm ${this.name}`);
    }

    constructor(options) {
        this.name = options?.name;
        this.color = options?.color;
    }
}

const animal = new Animal();

class Cat extends Animal {}
class Dog extends Animal {}

const dog = new Dog({ name: "Rex", color: "black" });
const cat = new Cat({ name: "Rex", color: "black" });

console.log(Animal.__proto__ === Function.prototype);
console.log(Animal.__proto__.__proto__ === Object.prototype);
console.log(Cat.__proto__ === Animal);
console.log(animal.__proto__ === Animal.prototype);
console.log(cat.__proto__ === Cat.prototype);
console.log(cat.__proto__.__proto__ === Animal.prototype);
console.log(cat.__proto__.__proto__.__proto__ === Object.prototype);
