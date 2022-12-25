// when an operator is pressed, calculate the prior values

const display = document.querySelector('.calculator__screen');
const numButton = document.querySelectorAll('.calc__num__button');
const clearButton = document.querySelector('.calculator__button__clear');
const calcOperators = document.querySelectorAll('.calc__operator');
let operatorSymbol;
let numArray = [];
let currentNum = "";

numButton.forEach(num => {
    num.addEventListener('click', () => {
        currentNum += num.textContent;
        updateDisplay(currentNum);
        // console.log(currentNum);           // displays number to console
    });
});

calcOperators.forEach(operator => {
    operator.addEventListener('click', () => { 
        numArray.push(+currentNum);
        operatorSymbol = operator.textContent;
        operate(numArray, operatorSymbol);
        currentNum = "";
        // console.log(...numArray);   
    })
})

clearButton.addEventListener('click', () => {
    clear();
})

function updateDisplay(nums) {
    display.textContent = nums;
}

function operate(nums, operator) {
    let temp = 0;
    nums.forEach(num => {
        if (operator == '+'){
            temp += +num;
            console.log(temp);
        }
    })
    currentNum =+ temp;
    updateDisplay(currentNum);
}

function clear() {
    currentNum = "";
    updateDisplay(currentNum);
}