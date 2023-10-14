let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (currentOperator !== '') {
            calculateResult();
        }
        currentOperator = value;
        firstOperand = currentInput;
        currentInput = '';
    } else {
        currentInput += value;
    }
    display.innerText = currentInput;
}

function calculateResult() {
    if (firstOperand === '' || currentInput === '') {
        return;
    }

    secondOperand = currentInput;
    let result = 0;

    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if (secondOperand === '0') {
                display.innerText = 'Error';
                clearDisplay();
                return;
            }
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }

    currentInput = result.toString();
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
    display.innerText = '0';
}
