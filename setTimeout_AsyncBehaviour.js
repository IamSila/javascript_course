// setTimeout function and its async behaviour

function func1() {
    this.age = 10;
    setTimeout(() => {
        this.age += 1;
        console.log(this.age); // 11
    },3000)
    let x = 5;
    console.log(x);
}


function func2() {
    console.log("this is the second function");
    setTimeout(() => {
        console.log("This is the secong timeout function in the callback queue")
    }, 5000)
}

func1();
func2();

/*
call stack - func1()
            func2()
completed and is empty


callback queue - settimeout(callback, delay)
*/

console.log("Today I am learning settimeout async behaviour");

setTimeout(() => {
    console.log("contents of the set timeout() function");
}, 0);

console.log("End of the call stack");

/*
single threaded - one taskt
call stack - synchronous

callback queue
*/