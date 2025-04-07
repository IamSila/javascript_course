// printing objects with an arrow fxn
const getPerson = () => ({name: "sila", age: "10"});

console.log(typeof getPerson().name);

// this reference
function func() {
    this.myvar = 0;
    this.myage = 10;
    let that = this;
    setTimeout(() => {
        that.myvar++;
        console.log(that.myvar);
        console.log(this.myvar);
        console.log(this.myage);
    }, 0);
}

func();