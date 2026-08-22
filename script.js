let number1 = null;
let number2 = null;
let operator = null;

function add() {
    return number1 + number2;
};

function subtract() {
    return number1 - number2;
};

function multiply() {
    return number1 * number2;
};

function divide() {
    return number1 / number2;
};

function operate() {
    if (operator === "add") {
        return add();
    } else if (operator === "subtract") {
        return subtract();
    } else if (operator === "multiply") {
        return multiply();
    } else if (operator === "divide") {
        return divide();
    };
};

function pressDigit(num) {
    if (number1 === null) {
        number1 = 0;
    };
    if (number2 === null && operator === null) {
        number1 = Number(String(number1) + String(num));
        return;
    } else {
        if (number2 === null) {
            number2 = 0;
        };
        number2 = Number(String(number2) + String(num));
        return;
    };
};

function pressOperator(opr) {
    if (operator === null && number2 === null) {
        operator = opr;
    } else {
        number1 = operate();
        operator = opr
        number2 = null;
    };
};

pressDigit(2);

pressOperator('multiply');

pressDigit(2);
pressDigit(5);

pressOperator('add');

pressDigit(7);

pressOperator('subtract');

console.log('Number 1: ' + number1);
console.log('Number 2: ' + number2);