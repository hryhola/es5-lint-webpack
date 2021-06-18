/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 606:
/***/ ((module) => {

function Animal(name) {
    this.name = name;
}
Animal.prototype.greet = function () {
    console.log("Hi, I'm " + this.name + ".");
};

module.exports = Animal;


/***/ }),

/***/ 865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Animal = __webpack_require__(606);

function Cat(name, lovedFood) {
    Animal.call(this, name);

    this.lovedFood = lovedFood;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

module.exports = Cat;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var Animal = __webpack_require__(606);
var Cat = __webpack_require__(865);

var animal = new Animal("Bob");
var cat = new Cat("Mike", "fish");

animal.greet();
cat.greet();

})();

/******/ })()
;