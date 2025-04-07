const array = [1, 2, 3, 4];
const array2 = [...array, 5, 6, 7];
console.log(array2);

function func(x, y, ...params) {
    console.log(x);
    console.log(y);
    console.log(params);
}

func("a", "b", "c", "d", "e", "f");