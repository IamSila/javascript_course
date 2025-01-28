// this is recursive fxn in js

function factorial(n){
    if (n==0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

// finding the factorial of 4 using this fxn ==> 24
factorialOf4 = factorial(4);
console.log(factorialOf4);

// factorial of 5 ==> 120
factorialOfFive = factorial(5);
console.log(`The factorial of five is { factorialOfFive }`);