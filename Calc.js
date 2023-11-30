// Project: Calculator


const display = document.querySelector('.display');
const btn = document.querySelector('div.operands');
const nums = document.querySelectorAll('.nums');

//Add event listener to all the buttons with a class of nums.
nums.forEach((button) => {

    button.addEventListener('click', () => {
        
        let input = display.textContent = button.textContent
        firstNumber += input;
        display.textContent = firstNumber;
          
    });
})



//Parts of the calculator operation
let firstNumber = '';
let operator;
let secondNumber;

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
const operate = function ( equation) {

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

