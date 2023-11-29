// Project: Calculator


//Parts of the calculator operation
let firstNumber;
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

