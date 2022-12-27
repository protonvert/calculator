// when an operator is pressed, calculate the prior values

const display = document.querySelector('.calculator__screen');
const numButton = document.querySelectorAll('.calc__num__button');
const clearButton = document.querySelector('.calculator__button__clear');
const calcOperators = document.querySelectorAll('.calc__operator');
const deleteButton = document.querySelector('.calculator__button__delete');
let numArray = [];
let currentNum = "";

numButton.forEach(num => {
    num.addEventListener('click', () => {
        currentNum += num.textContent;
        updateDisplay(currentNum);
    });
});



calcOperators.forEach(operator => {
    operator.addEventListener('click', () => { 

        console.log(numArray);

        let operatorSymbol = operator.textContent;

        if (operatorSymbol === '='){
            numArray.push(+currentNum);
            operate(numArray);
            numArray.length = 0;
        }

        else if (numArray.length < 2){
            numArray.push(+currentNum);
            numArray.push(operatorSymbol);
            updateDisplay(+currentNum);
            currentNum = "";
        }

        else {
            numArray.push(+currentNum);
            operate(numArray);
            numArray.length = 0;
            numArray.push(+currentNum);
            numArray.push(operatorSymbol);
            currentNum = "";
        }

        console.log(...numArray);

    })
})

deleteButton.addEventListener('click', deleteDigit);

clearButton.addEventListener('click', clear);

function updateDisplay(nums) {
    display.textContent = nums;
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b == 0){
        window.location.href = "https://youtu.be/tQPtKNZpfz4";
        return 'no...';
    }
    else {
        return a / b;
    }
}

function operate(nums) {

    if (nums[1] == '*') {
        currentNum = multiply(nums[0], nums[2]);
    }

    if (nums[1] == '/') {
        currentNum = divide(nums[0], nums[2]);
    }

    if (nums[1] == '+') {
        currentNum = add(nums[0], nums[2]);
    }

    if (nums[1] == '-') {
        currentNum = subtract(nums[0], nums[2]);
    }
    
    updateDisplay(currentNum);
}

function clear() {
    currentNum = "";
    numArray.length = 0;
    updateDisplay(currentNum);
}

function deleteDigit() {
    currentNum = currentNum.substring(0, currentNum.length - 1);
    console.log(currentNum);
    updateDisplay(currentNum);
}