function Animal(name) {
    this.name = name;
}
Animal.prototype.greet = function () {
    console.log("Hi, I'm " + this.name + ".");
};

module.exports = Animal;
