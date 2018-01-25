const add = function(a, b) {
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Alex',
    cities: ['Orlando', 'Fort Lauderdale', 'Columbus'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' had lived in ' + city);
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 9,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());