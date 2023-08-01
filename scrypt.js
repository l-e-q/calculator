let displayValue = '';
const display = document.querySelector('#display');

const add = function (x, y) {
    return (x + y).toFixed(3).replace(/[.,]000$/, "");
};

const subtract = function (x, y) {
    return (x - y).toFixed(3).replace(/[.,]000$/, "");
};

const divide = function (x, y) {
    return (x / y).toFixed(3).replace(/[.,]000$/, "");
}

// const sum = function (array) {
//     let sum = 0;
//     array.forEach(x => sum += x);
//     return sum;
// };

const multiply = function (x, y) {
    return (x * y).toFixed(3).replace(/[.,]000$/, "");
};

// const power = function (x, y) {
//     return x ** y;
// };

// const factorial = function (x) {
//     let result = [];
//     for (let i = 1; i <= x; i++) {
//         result.push(i);
//     }
//     return multiply(result);
// };

function operate(operator, x, y) {
    if (operator === '*') {
        return multiply(x, y);
    } else if (operator === '/') {
        return divide(x, y);
    } else if (operator === '+') {
        return add(x, y);
    } else if (operator === '-') {
        return subtract(x, y);
    }
}

function updateDisplayValue() {
    display.textContent = displayValue;
}

document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.id.charAt(5);
        updateDisplayValue();
    });
});

let firstValue;
let secondValue;
let operator;

document.querySelectorAll('.operator-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('#Period').disabled = false;
        firstValue = Number(displayValue);
        operator = button.textContent;
        displayValue += ' ' + button.textContent + ' ';
        updateDisplayValue();
    });
});

document.querySelector('#Equal').addEventListener('click', () => {
    document.querySelector('#Period').disabled = false;
    secondValue = Number(displayValue.split(' ')[2]);
    if (secondValue === 0 && operator === '/') {
        alert('Can\'t divide by 0');
    } else if (secondValue || secondValue === 0) {
        displayValue = operate(operator, firstValue, secondValue);
        updateDisplayValue();
    } else {
        alert('Enter second number');
    }

});

document.querySelector('#Backspace').addEventListener('click', () => {
    if (displayValue.split('').pop() === '.') {
        document.querySelector('#Period').disabled = false;
    }
    if (displayValue.split('').pop() === ' ') {
        displayValue = displayValue.slice(0, displayValue.length - 3);
    } else {
        displayValue = displayValue.slice(0, displayValue.length - 1);
    }
    updateDisplayValue();
});

document.querySelector('#KeyC').addEventListener('click', () => {
    document.querySelector('#Period').disabled = false;
    displayValue = '';
    firstValue = undefined;
    secondValue = undefined;
    updateDisplayValue();
});

document.querySelector('#Period').addEventListener('click', () => {
    displayValue += document.querySelector('#Period').textContent;
    updateDisplayValue();
    document.querySelector('#Period').disabled = true;
});

document.body.addEventListener('keydown', event => {
    document.querySelector(`#${(event.shiftKey && event.key !== 'Shift' && event.key === '*' || event.key === '+') ? ((event.key === '*') ? 'multiply' : 'add') : event.code}`) ? document.querySelector(`#${(event.shiftKey && event.key !== 'Shift' && event.key === '*' || event.key === '+') ? ((event.key === '*') ? 'multiply' : 'add') : event.code}`).click() : null;
});
