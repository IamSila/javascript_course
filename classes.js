class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    stringSentence(){
        return `Hello, my name is ${this.name} and I am ${this.age}`;
    }
}


const myPerson = new Person("Manu", 23);
console.log(myPerson.age);
console.log(myPerson.name);



// classes
class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    getHelloPhrase() {
        return `Hi, I am a ${this.name}`;
    }
}


// create a class extending the polygon class above
class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
        this.length = length;
    }

    getCustomHelloPhrase() {
        const polygonPhrase = super.getHelloPhrase();
        return `${polygonPhrase} with a length of ${this.length}`
    }

    getArea() {
        return this.height * this.width;
    }
}