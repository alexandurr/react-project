class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi I am ${ this.name }!`;
    }

    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super();
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        return 'testing';
        let description = super.getDescription()
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

const me = new Student('Alex Willoughby', 33, 'Web Design');
const other = new Student();

console.log(me.getDescription());
console.log(other.getDescription());