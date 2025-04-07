// setTimeout() and it's ascynchronous behaviour in js

/*
console.log("Today I am learning settimeout function");

setTimeout(() => {
    console.log("this is the set timeout function clause");
}, 0);


console.log("I have finished learning");



call stack - console.log, console.log

complete and empty

callback queue - setTimout(), setTimeout()


*/



function funct1() {
    this.age = 1;
    setTimeout(() => {
        this.age += 1;
        console.log("Settimeout inside funct1()");
    }, 0);
    let x = 5;
    console.log(x);
}

function fucn2() {
    console.log("This executes then the setTimeout() now executes");
    setTimeout(() => {
        console.log("Settimeout() inside func2");
    })
}

funct1();
fucn2();

