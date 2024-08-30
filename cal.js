// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousValue = '';

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
    currentInput += number;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousValue !== '') {
        calculateResult();
    }
    operator = op;
    previousValue = currentInput;
    currentInput = '';
    display.textContent += ' ' + op + ' ';
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    operator = '';
    previousValue = '';
}

function calculateResult() {
    if (previousValue === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }
    display.textContent = result;
    currentInput = result;
    operator = '';
    previousValue = '';
}
