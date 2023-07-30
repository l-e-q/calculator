const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (array) {
    let sum = 0;
    array.forEach(x => sum += x);
    return sum;
};

const multiply = function (array) {
    let result = 1;
    array.forEach(x => result *= x);
    return result;
};

const power = function (x, y) {
    return x ** y;
};

const factorial = function (x) {
    let result = [];
    for (let i = 1; i <= x; i++) {
        result.push(i);
    }
    return multiply(result);
};