let number1 = '0';
let number2 = null;
let operator = null;

function getVars() {
    console.log('number1: ' + number1);
    console.log('operator: ' + operator);
    console.log('number2: ' + number2);
};

const calcDisplay = document.getElementById('calcDisplay');

function updateDisplay() {
    if (number2 === null) {
        calcDisplay.textContent = number1.slice(0, 15);
    } else {
        calcDisplay.textContent = number2.slice(0, 15);
    }
};

function add() {
    return String(Number(number1) + Number(number2));
};

function subtract() {
    return String(Number(number1) - Number(number2));
};

function multiply() {
    return String(Number(number1) * Number(number2));
};

function divide() {
    return String(Number(number1) / Number(number2));
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
    if (number2 === null && operator === null) {
        if (number1.includes('.') && num === '.') {
            return;
        };
        number1 = number1 + num;
        number1 = number1.replace(/^0+(?!\.)/, '');
        updateDisplay();
    } else {
        if (number2.includes('.') && num === '.') {
            return;
        };
        if (number2 === null) {
            number2 = '0';
        };
        number2 = number2 + num;
        number2 = number2.replace(/^0+(?!\.)/, '');
        updateDisplay();
    };
};

function pressOperator(opr) {
    if (!(number1 === null || operator === null || number2 === null)) {
        number1 = operate();
        updateDisplay();
    };
    operator = opr;
    number2 = '0';
    updateDisplay();

};

function resolve() {
    if (number2 === null || operator === null) {
        // Do nothing.
    } else if (number2 === null) {
        number2 = '0';
        number1 = operate();
    } else {
        number1 = operate();
    };
    number2 = null;
    operator = null;
    updateDisplay;
};

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn0 = document.getElementById('btn-0');
const btnDot = document.getElementById('btn-dot');
const btnAdd = document.getElementById('btn-add');
const btnSubtract = document.getElementById('btn-subtract');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const btnClear = document.getElementById('btn-clear');
const btnResolve = document.getElementById('btn-resolve');

btn1.addEventListener('click', () => {
    pressDigit('1');
});
btn2.addEventListener('click', () => {
    pressDigit('2');
});
btn3.addEventListener('click', () => {
    pressDigit('3');
});
btn4.addEventListener('click', () => {
    pressDigit('4');
});
btn5.addEventListener('click', () => {
    pressDigit('5');
});
btn6.addEventListener('click', () => {
    pressDigit('6');
});
btn7.addEventListener('click', () => {
    pressDigit('7');
});
btn8.addEventListener('click', () => {
    pressDigit('8');
});
btn9.addEventListener('click', () => {
    pressDigit('9');
});
btn0.addEventListener('click', () => {
    pressDigit('0');
});
btnDot.addEventListener('click', () => {
    pressDigit('.');
});
btnAdd.addEventListener('click', () => {
    pressOperator('add');
});
btnSubtract.addEventListener('click', () => {
    pressOperator('subtract');
});
btnMultiply.addEventListener('click', () => {
    pressOperator('multiply');
});
btnDivide.addEventListener('click', () => {
    pressOperator('divide');
});
btnClear.addEventListener('click', () => {
    number1 = '0';
    number2 = null;
    operator = null;
    updateDisplay();
});
btnResolve.addEventListener('click', () => {
    resolve();
    updateDisplay();
});

updateDisplay();