var Animal = require("./Animal");

function Cat(name, lovedFood) {
    Animal.call(this, name);

    this.lovedFood = lovedFood;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

module.exports = Cat;