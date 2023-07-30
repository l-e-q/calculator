const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const divide = function (x, y) {
    return x / y;
}

// const sum = function (array) {
//     let sum = 0;
//     array.forEach(x => sum += x);
//     return sum;
// };

const multiply = function (x, y) {
    return x * y;
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

function operate(operator, x, y) {
    if (operator = '*') {
        return multiply(x, y);
    } else if (operator = '/') {
        return divide(x, y);
    } else if (operator = '+') {
        return add(x, y);
    } else if (operator = '-') {
        return subtract(x, y);
    }
}

console.log(operate())
