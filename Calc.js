// Project: Calculator


const display = document.querySelector('.display');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');



//Add event listener to all the buttons with a class of nums.
nums.forEach((button) => {

    button.addEventListener('click', () => {
        display.textContent = '';
        let input = display.textContent = button.textContent
        displayValues += input;
        display.textContent = displayValues;
          
    });
})




//Event listners for operator buttons
operators.forEach((operation) => {
    operation.addEventListener('click', () => {

        display.textContent = '';
        operator = display.textContent = operation.textContent;
        console.log(operator)
    })
})



clear.addEventListener('click', () => {
     display.textContent = '';
     firstNumber = '';
     operator = '';
     secondNumber = '';
})



//Parts of the calculator operation
let displayValues = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';



//Add function
const add = function ( a, b ) {
    return a + b;
}

//Subtract function
const subtract = function ( a, b ) {
    return a - b;
}

//Multiply function 
const multiply = function ( a, b ) {
    return a * b;
}

//Divide function 
const divide = function( a, b ) {
    return a / b;
}


//Operate function
const operate = function ( equation ) {

    let str = equation.split(" ")
    console.log(str)
    a = +str[0];
    op = str[1];
    b = +str[2];

if (op === "+") return add (a,b);
if (op === "-") return subtract( a,b); 
if (op === "*") return multiply( a,b); 
if (op === "/") return divide( a,b); 

}

console.log(operate( "166 - 555" ))
console.log(operate( "166 + 555" ))
console.log(operate( "166 * 555" ))
console.log(operate( "166 / 555" ))

