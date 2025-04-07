// destructuring objects and arrays
const person = {
    firstName: "Sila",
    lastName: "Mulingi",
    age: 40,
    sex: "M",
}

// const first = person.firstName;
// const age = person.age;
// const city = person.city || "Paris";

// with destructuring
const {firstName, month = "April", age, city = "Paris" } = person;


console.log(typeof person);
console.log(firstName);
console.log(age);
console.log(month);


function joinFirstLastName({firstName, lastName}) {
    return firstName + '-' + lastName;
}

joinFirstLastName(person);


// destructuring an array
const myArray = ["a", "b", "c", "d"];

// without destructing
const x = myArray[0];
const y = myArray[1];
console.log(x,y);

// without destructuring
const [r, t, v, m] = myArray;
console.log(r, t, v, m);


// array methods - map, filter, reduce and find

const numbers = [0, 1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((n) => n > 2);
const sum = numbers.reduce((prev, next) => prev + next, 0);
const doubledNumbers = numbers.map((n) => n * 2 );
console.log(evenNumbers);


const students = [
    {name: "nick", grade: 10},
    {name: "John", grade: 15},
    {name: "Julia", grade: 19},
    {name: "Nathalie", grade: 9},
]

const aboveSum = students.map((student) => student.grade).filter(grade => grade > 0).reduce((prev, next) => prev + next, 0);

console.log(aboveSum);