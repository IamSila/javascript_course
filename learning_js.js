// let

function myFunction() {
    let myvar = "Nick";
    if (true) {
        let myvar = "John";
        console.log(myvar);
    }
    console.log(myvar);
}

// console.log(myvar); throws an error coz myvar isn't found

// running the function
myFunction();