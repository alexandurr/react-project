'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1));

var user = {
    name: 'Alex',
    cities: ['Orlando', 'Fort Lauderdale', 'Columbus'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' had lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 9,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
